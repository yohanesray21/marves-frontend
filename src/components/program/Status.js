import { Stack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";

function Status() {
  return (
    <Stack marginY={4} direction="row" spacing={8}>
      <Flex alignItems="center">
        <Sign color="black" /> Show All
      </Flex>
      <Flex alignItems="center">
        <Sign color="#FF0000" />
        Overdue
      </Flex>
      <Flex alignItems="center">
        <Sign color="#FFC000" />
        Suspended
      </Flex>
      <Flex alignItems="center">
        <Sign color="#FFFF00" />
        Pending
      </Flex>
      <Flex alignItems="center">
        <Sign color="#00B050" />
        Done
      </Flex>
      <Flex alignItems="center">
        <Sign color="#00B0F0" />
        Active
      </Flex>
    </Stack>
  );
}

function Sign({ color }) {
  return (
    <Box
      width="12px"
      height="12px"
      borderRadius="full"
      backgroundColor={color}
      marginRight={2}
    ></Box>
  );
}

export default Status;
