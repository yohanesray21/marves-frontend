import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import React from "react";

function ToggleButtonNav({ onOpen, btnRef }) {
  return (
    <Box marginX={2}>
      <IconButton
        backgroundColor="transparent"
        ref={btnRef}
        as={HamburgerIcon}
        cursor="pointer"
        padding={2}
        boxSizing="content-box"
        onClick={onOpen}
        color="white"
        size="sm"
        _hover={{ backgroundColor: "transparent", color: "white" }}
      />
    </Box>
  );
}

export default ToggleButtonNav;
