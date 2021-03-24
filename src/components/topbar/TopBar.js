import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/logo/logo_main.png";
import { Icon } from "@chakra-ui/react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import ToggleButtonNav from "../UI/ToggleButtonNav";

function TopBar({ onOpen, buttonRef }) {
  return (
    <Box padding={4} backgroundColor="#14117A">
      <Flex width="full" justifyContent="space-between" alignItems="center">
        <Flex color="#FDB514" marginRight={4} alignItems="center">
          <Box width="45px" height="45px">
            <Image src={Logo} width="full" />
          </Box>
          <Text fontWeight="bold">
            Marves <br /> Prime
          </Text>
          <Box marginRight={16}>
            <ToggleButtonNav
              onOpen={onOpen}
              buttonRef={buttonRef}
              marginRight={16}
            />
          </Box>
          <Flex color="white">
            <Text marginRight={4} fontWeight="bold">
              Program/Isu
            </Text>
            <Text>Arahan Menteri</Text>
          </Flex>
        </Flex>

        <Stack color="white" direction="row" fontSize={30}>
          <Icon as={IoNotificationsOutline} />
          <Icon as={BiUserCircle} />
          <Icon as={IoIosArrowDown} />
        </Stack>
      </Flex>
    </Box>
  );
}

export default TopBar;
