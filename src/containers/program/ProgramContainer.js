import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Data from "../../components/program/Data";
import Status from "../../components/program/Status";

function ProgramContainer() {
  return (
    <Box padding={4} margin={4}>
      <Button
        borderRadius="5px"
        backgroundColor="#322881"
        color="white"
        marginY={4}
      >
        Tambah Program/Isu
      </Button>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Text marginRight={2}>Show: </Text>
          <Select placeholder="10 entries">
            <option>1</option>
          </Select>
        </Flex>
        <InputGroup size="md" width="600px">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Cari"
            backgroundColor="#FAF9F9"
          />
          <InputRightElement width="4.5rem">
            <Icon as={IoSearch} />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Status />
      <Data />
    </Box>
  );
}

export default ProgramContainer;
