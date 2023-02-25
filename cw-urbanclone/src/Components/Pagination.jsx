import { Button } from "@chakra-ui/button";
import { Box, Center } from "@chakra-ui/layout";
import React from "react";

function Pagination({ page, handleChange, count }) {
  return (
    <Center>
      <Box>
        <Button isDisabled={page === 1} onClick={() => handleChange(-1)}>
          Prev
        </Button>{" "}
        <span />
        <Button isDisabled>{page}</Button> <span />
        <Button
          isDisabled={page === Math.ceil(count / 4)}
          onClick={() => handleChange(1)}
        >
          Next
        </Button>
      </Box>
    </Center>
  );
}

export default Pagination;
