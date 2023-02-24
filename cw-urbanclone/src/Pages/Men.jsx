import React, { useState, useEffect } from "react";

import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const getData = () => {
  return fetch(`http://localhost:8080/men`).then((res) => res.json());
};

const Men = () => {
  const [datas, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoad(true);
      let data = await getData();
      console.log(data);
      setData(data);
      setLoad(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <Box display={"flex"} width={"90%"} height={"auto"} margin="auto">
      <Box></Box>
      <Box
        marginBottom={"40px"}
        marginTop="20px"
        display={"grid"}
        gap="15px"
        textAlign="center"
        gridTemplateColumns="repeat(2,1fr)"
        width={"80%"}
        height={"auto"}
      >
        {datas?.map((i) => {
          return (
            <Link to={`/men/${i.id}`}>
              <Box
                key={i.id}
                p="20px"
                boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              >
                <Image margin={"auto"} w="150px" src={i.img} />
                <Text fontWeight={"semibold"}>{i.title}</Text>
                <Text fontWeight={"semibold"}>Starts at {i.price}</Text>
                <Text>★★★★☆</Text>
                <hr style={{ border: "1px solid grey", margin: "10px" }} />
                <Text color="green">{i.description}</Text>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Men;
