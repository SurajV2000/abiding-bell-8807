import React from "react";
import navbar from "./navbar.css";
import { NavLink } from "react-router-dom";
import {
  Image,
  Flex,
  Input,
  InputGroup,
  Box,
  Center,
  Text,
  InputLeftElement,
  border,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Men from "./Men";
import Home from "./Home";

const Navbar = () => {
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
          src="https://fashionista-suraj.netlify.app/Fashionisa%20(2).png"
          alt="Dan Abramov"
          w="40"
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
      </Box>
    </Box>
  );
};

export default Navbar;
