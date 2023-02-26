import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import navbar from "../Pages/navbar.css";
import {
  Image,
  Input,
  InputGroup,
  Box,
  Text,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { AuthContext } from "../Context.jsx/AuthContextProvider";

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const fetchData = async (page) => {
    try {
      let get = await fetch(`http://localhost:8080/cart`);
      let data = await get.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  let total = 0;
  data.forEach(() => {
    total++;
  });

  return (
    <Box
      className="navi"
      display="flex"
      justifyContent="space-around"
      margin="auto"
      height="72px"
      alignItems="center"
    >
      <NavLink to="/">
        <Image
          src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
          alt="Dan Abramov"
          w="40"
          backgroundColor={"black"}
        />
      </NavLink>

      <InputGroup w="35%">
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<SearchIcon />}
        />
        <Input placeholder="Search For Services" />
      </InputGroup>

      <Box display="flex" justifyContent="space-around" gap="18px">
        <NavLink
          style={({ isActive }) => {
            return isActive ? { borderBottom: "3px solid black" } : null;
          }}
          to="men"
        >
          <div className="nav-cont">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
              alt="Dan Abramov"
              w="30px"
              margin="auto"
            />
            <Text fontSize="10px">Salon For Men</Text>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return isActive ? { borderBottom: "3px solid black" } : null;
          }}
          to="women"
        >
          <div className="nav-cont">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png"
              alt="Dan Abramov"
              w="30px"
              margin="auto"
            />
            <Text fontSize="10px">Salon For Women</Text>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return isActive ? { borderBottom: "3px solid black" } : null;
          }}
          to="electrician"
        >
          <div className="nav-cont">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg"
              alt="Dan Abramov"
              w="30px"
              margin="auto"
            />
            <Text fontSize="10px">Electricians</Text>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return isActive ? { borderBottom: "3px solid black" } : null;
          }}
          to="appliance"
        >
          <div className="nav-cont">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png"
              alt="Dan Abramov"
              w="30px"
              margin="auto"
              // _hover={{ bg: 'blue.500' }}
            />
            <Text fontSize="10px">AC/Appliances Repair</Text>
          </div>
        </NavLink>
        <Center>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { borderBottom: "3px solid black" } : null;
            }}
            to="cart"
          >
            <div className="cart">
              <i  class="fa-solid fa-cart-shopping"></i>
              <span className="span">{total}</span>
            </div>
          </NavLink>
        </Center>
        <Center>
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />}></MenuButton>
            <MenuList>
              <NavLink to="/admin">
                <MenuItem>Admin</MenuItem>
              </NavLink>
              <MenuItem
                isDisabled={!auth}
                onClick={() => {
                  alert("Logout Successfully");
                  logout();
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Center>
      </Box>
    </Box>
  );
};

export default Navbar;
