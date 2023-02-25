import React, { useState, useEffect } from "react";

import { Box, Stack, Image, Select, Spinner, Text } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";


const getCurrentPage = (page) => {
  page = Number(page);

  if (typeof page !== "number" || page <= 0 || !page) {
    return 1;
  }
  return page;
};

const Men = () => {
  const [params, setParams] = useSearchParams();
  const [datas, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setError] = useState(false);
  const [page, setPage] = useState(getCurrentPage(params.get("page")));
  const [order, setOrder] = useState("");
  const [count, setcount] = useState();

  let url;
  if (order) {
    url = `http://localhost:8080/men?_page=${page}&_limit=4&_sort=price&_order=${order}`;
  } else {
    url = `http://localhost:8080/men?_page=${page}&_limit=4`;
  }

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
              <Link key={i.id} to={`/men/${i.id}`}>
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
                </Box>
              </Link>
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
        </Stack>
      </Box>
    </Box>
  );
};

export default Men;
