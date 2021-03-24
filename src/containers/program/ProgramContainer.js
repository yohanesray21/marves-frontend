import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import Data from "../../components/program/Data";
import Info from "../../components/program/Info";
import TambahProgramPopUp from "../../components/program/popup/TambahProgramPopUp";
import Status from "../../components/program/Status";

function ProgramContainer() {
  const [popUpOpen, setPopOpen] = useState(false);

  return (
    <Box padding={4} margin={4}>
      <Button
        borderRadius="5px"
        backgroundColor="#322881"
        color="white"
        marginY={4}
        onClick={() => setPopOpen(true)}
      >
        Tambah Program/Isu
      </Button>
      <Info />
      <Status />
      <Data />

      <TambahProgramPopUp
        isOpen={popUpOpen}
        onClose={() => setPopOpen(false)}
      />
    </Box>
  );
}

export default ProgramContainer;
