import React from 'react'
import {Box,Image,Text,Center} from "@chakra-ui/react"
import mid from "./mid.css"
import Carousel from './Carousel'


const Mid = () => {
  return <Box>
    <Box  className='mid'  height={"552px"} backgroundImage={'https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg'} backgroundSize={"cover"}>
      <p  >HOME SERVICES ON DEMAND</p>
    </Box>
    <Box  display={"flex"} justifyContent={"space-between"} margin="auto" padding={"25px"} width="75%" height="auto"   >
        <Image className="dec" width="22%" src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/customer-app-supply/1676871566050-924737.jpeg'></Image>
        <Image className="dec"  width="22%" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1673601712930-f599a7.jpeg"></Image>
        <Image className="dec"  width="22%" src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1673603125430-c3ef98.jpeg'></Image>
        <Image className="dec"  width="22%" src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/customer-app-supply/1676871603117-9d3689.jpeg'></Image>
    </Box>
  </Box>
}

export default Mid
