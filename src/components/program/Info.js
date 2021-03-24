import React from "react";
import { IoSearch } from "react-icons/io5";
import { Select } from "@chakra-ui/select";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";

function Info() {
  return (
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
  );
}

export default Info;
