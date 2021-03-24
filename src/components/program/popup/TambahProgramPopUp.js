import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import TambahProgramForm from "./TambahProgramForm";

function TambahProgramPopUp({ isOpen, onClose }) {
  return (
    <Modal size="5xl" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Tambah Program/Isu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TambahProgramForm />
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor="#C4C4C4"
            mr={3}
            onClick={onClose}
            borderRadius="0px"
            width={20}
          >
            Batal
          </Button>
          <Button
            backgroundColor="#322881"
            color="white"
            width={20}
            borderRadius="0px"
          >
            Simpan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TambahProgramPopUp;
