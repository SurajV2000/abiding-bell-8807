import React, { useState, useEffect } from "react";

import {
  Box,
  Button,
  Center,
  Stack,
  Image,
  Select,
  Spinner,
  useToast,
  Text,
} from "@chakra-ui/react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";

const getCurrentPage = (page) => {
  page = Number(page);

  if (typeof page !== "number" || page <= 0 || !page) {
    return 1;
  }
  return page;
};

const Cart = () => {
  const [params, setParams] = useSearchParams();
  const [datas, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setError] = useState(false);
  const [page, setPage] = useState(getCurrentPage(params.get("page")));
  const [order, setOrder] = useState("");
  const [count, setcount] = useState();
  let price = 0;
  let url;
  if (order) {
    url = `http://localhost:8080/cart?_page=${page}&_limit=4&_sort=price&_order=${order}`;
  } else {
    url = `http://localhost:8080/cart?_page=${page}&_limit=4`;
  }
  const toast = useToast();
  const fetchData = async (page) => {
    try {
      setLoad(true);
      let get = await fetch(url);
      setcount(get.headers.get("X-Total-Count"));
      let data = await get.json();
      setData(data);
      setLoad(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoad(false);
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/cart/${id}`, { method: "DELETE" }).then(
      (res) => {
        res.json();
        toast({
          title: "Item Deleted from cart.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        fetchData(`http://localhost:8080/cart`);
      }
    );
  };
  datas.forEach((i) => {
    price += i.price;
  });

  const handleChange = (val) => {
    setPage(page + val);
  };
  useEffect(() => {
    fetchData(page);
  }, [page, order]);
  useEffect(() => {
    let obj = { page };
    if (order) {
      obj.order = order;
    } else {
      obj = { page };
    }
    setParams(obj);
  }, [page, order]);

  return load ? (
    <Box
      textAlign={"center"}
      width={"100%"}
      height={"400px"}
      paddingTop="150px"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  ) : err ? (
    "Something went wrong"
  ) : (
    <Box
      display={"flex"}
      width={"95%"}
      height={"auto"}
      // border={"1px solid blue"}
      paddingBottom="40px"
      margin="auto"
      gap={"20px"}
    >
      <Box width={"80%"}>
        <Text fontSize={"40px"} textAlign={"center"}>
          Cart Item
        </Text>
        <Box
          marginBottom={"40px"}
          marginTop="20px"
          display={"grid"}
          gap="15px"
          textAlign="center"
          gridTemplateColumns="repeat(2,1fr)"
          width={"100%"}
          height={"auto"}
        >
          {datas?.map((i) => {
            return (
              <Box
                key={i.id}
                p="20px"
                boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              >
                <Image margin={"auto"} w="150px" src={i.img} />
                <Text fontWeight={"semibold"}>{i.title}</Text>
                <Text fontWeight={"semibold"}>Starts at ₹{i.price}</Text>
                <Text>★★★★☆</Text>
                <hr style={{ border: "1px solid grey", margin: "10px" }} />
                <Text color="green">{i.description}</Text>
                <Center>
                  {" "}
                  <Button
                    mt="5px"
                    bg="red"
                    color="white"
                    onClick={() => handleDelete(i.id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </Center>
              </Box>
            );
          })}
        </Box>
        <Pagination count={count} page={page} handleChange={handleChange} />
      </Box>
      <Box
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        width={"20%"}
        height="300px"
        marginTop={"20px"}
        padding={"5px"}
      >
        <Stack spacing={3}>
          <Select
            onChange={(e) => {
              setOrder(e.target.value);
              console.log(e.target.value);
            }}
            variant="outline"
            placeholder="Sort By Price"
          >
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </Select>
          <Select variant="outline" placeholder="Sort By Services">
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </Select>
          <Text textAlign="center" mt="30px" fontSize="2xl">
            Total Amount:{" "}
            <Text fontStyle="italic" fontSize="3xl">
              ₹ {price}
            </Text>{" "}
          </Text>
          <Center>
            <Button
              isDisabled={price === 0}
              bg="green"
              color="white"
              p="10px 30px"
              onClick={() => {
                window.location.href = "/checkout";
                console.log("click");
              }}
            >
              Checkout
            </Button>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
};

export default Cart;
