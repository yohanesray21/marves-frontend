import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";

function TambahProgramForm() {
  return (
    <Stack as="form" spacing={4}>
      <FormControl id="first-name" display="flex" alignItems="center">
        <FormLabel width="200px">Nama Program/Isu</FormLabel>
        <Input placeholder="Permasalahan Garam Nasional" />
      </FormControl>
      <FormControl id="first-name" display="flex" alignItems="center">
        <FormLabel width="200px">Substansi</FormLabel>
        <Input placeholder="Garam" />
      </FormControl>
      <FormControl id="first-name" display="flex" alignItems="center">
        <FormLabel width="200px">PIC</FormLabel>
        <Input placeholder="Asisten Deputi 1" />
      </FormControl>
      <FormControl id="first-name" display="flex" alignItems="center">
        <FormLabel width="200px">Kolaborator</FormLabel>
        <Input placeholder="Deputi 2" />
      </FormControl>
      <FormControl id="first-name" display="flex" alignItems="center">
        <FormLabel width="200px">Tanggal Pelaksanaan</FormLabel>
        <Flex justifyContent="space-between" width="full" alignItems="center">
          <Input placeholder="First name" type="date" />
          <Text marginX={4}>s/d</Text>
          <Input placeholder="First name" type="date" />
        </Flex>
      </FormControl>
      <FormControl id="first-name" display="flex" alignItems="center">
        <FormLabel width="200px">Kategori</FormLabel>
        <Stack direction="row" width="full">
          <Checkbox defaultIsChecked>Arahan Menteri</Checkbox>
          <Checkbox>Perjanjian Kerja</Checkbox>
          <Checkbox>Prioritas</Checkbox>
          <Checkbox>Quick wins</Checkbox>
          <Checkbox>Lainnya</Checkbox>
        </Stack>
      </FormControl>
    </Stack>
  );
}

export default TambahProgramForm;
