import React from "react";
import navbar from "./navbar.css"
import {
  Image,
  Flex,
  Input,
  InputGroup,
  Box,
  Center,
  Text,
  InputLeftElement
} from "@chakra-ui/react";
import { SearchIcon} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box p display="flex"  justifyContent="space-around" margin="auto" border="1px solid red" height ="72px" alignItems="center" >
   
          <Image
            src="https://fashionista-suraj.netlify.app/Fashionisa%20(2).png"
            alt="Dan Abramov"
            w="40" 
          />
          <InputGroup w="35%">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<SearchIcon/>}
            />
            <Input placeholder="Enter amount" />
          </InputGroup>

          <Box display="flex" justifyContent="space-around" gap="18px">
            <div className="nav-cont">
              <Image
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png"
            alt="Dan Abramov"
            w="30px" 
            margin="auto"
          />
          <Text  fontSize="10px">Salon For Men</Text>
            </div>

            <div className="nav-cont">
              <Image
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png"
            alt="Dan Abramov"
            w="30px" 
            margin="auto"
          />
          <Text fontSize="10px">Salon For Men</Text>
            </div>

            <div className="nav-cont">
              <Image
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png"
            alt="Dan Abramov"
            w="30px" 
            margin="auto"
          />
          <Text fontSize="10px">Salon For Men</Text>
            </div>

            <div className="nav-cont">
              <Image
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png"
            alt="Dan Abramov"
            w="30px" 
            margin="auto"
            // _hover={{ bg: 'blue.500' }}
          />
          <Text fontSize="10px">Salon For Men</Text>
            </div>
            
          </Box>
 
    </Box>
  );
};

export default Navbar;