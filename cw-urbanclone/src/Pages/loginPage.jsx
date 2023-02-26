import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context.jsx/AuthContextProvider";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();
  const handleAdd = async (val) => {
    try {
      await fetch(`http://localhost:8080/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(val),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const { auth, login, logout } = useContext(AuthContext);
  const authData = (val) => {
    fetch(`http://localhost:8080/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log("1");
        let temp = data.filter((el) => {
          return el.email === val.email && el.password === val.password;
        });
        if (temp.length === 0) {
          toast({
            title: "User Credintials Doesnt Match",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Logged In Successful.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authData(form);
    console.log("form");
    setForm({
      email: "",
      password: "",
    });
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, password } = form;
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  onChange={handleForm}
                  value={email}
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  value={password}
                  onChange={handleForm}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
