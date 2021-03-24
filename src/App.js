import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import TopBar from "./components/topbar/TopBar";
import ProgramContainer from "./containers/program/ProgramContainer";
import { RiDashboardLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="App">
      <TopBar onOpen={onOpen} buttonRef={btnRef} />

      <ProgramContainer />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent backgroundColor="black" color="white">
            <DrawerCloseButton />
            <DrawerHeader>MENU</DrawerHeader>

            <DrawerBody>
              <Stack spacing={2}>
                <Flex
                  alignItems="center"
                  backgroundColor="#C4C4C4"
                  padding={2}
                  cursor="pointer"
                >
                  <Icon as={RiDashboardLine} marginRight={2} /> Dashboard
                </Flex>
                <Flex alignItems="center" padding={2} cursor="pointer">
                  <Icon as={FiUsers} marginRight={2} /> Data User
                </Flex>
                <Flex alignItems="center" padding={2} cursor="pointer">
                  <Icon as={IoIosTimer} marginRight={2} /> User Log
                </Flex>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
}

export default App;
