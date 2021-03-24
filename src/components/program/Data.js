import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Tfoot } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

function Data() {
  return (
    <Box marginY={8}>
      <Table variant="simple">
        <Thead backgroundColor="#DBE1FF" fontWeight="bold">
          <Tr>
            <Th>Nama Program</Th>
            <Th>Status</Th>
            <Th>Kategori</Th>
            <Th>Progress</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Permasalahan Kenaikan Harga Daging Sapi</Td>
            <Td>Done</Td>
            <Td>Arahan Menteri Perjanjian Kinerja Prioritas</Td>
            <Td>
              <Progress value={100} />
            </Td>
          </Tr>
          <Tr>
            <Td>Pengadaan Laptop</Td>
            <Td>Done</Td>
            <Td>Arahan Menteri Perjanjian Kinerja Prioritas</Td>
            <Td>
              <Progress value={100} />
            </Td>
          </Tr>
          <Tr>
            <Td>Pos Lintas Batas Daerah</Td>
            <Td>Done</Td>
            <Td>Arahan Menteri Perjanjian Kinerja Prioritas</Td>
            <Td>
              <Progress value={100} />
            </Td>
          </Tr>
          <Tr>
            <Td>Program Magang</Td>
            <Td>Done</Td>
            <Td>Arahan Menteri Perjanjian Kinerja Prioritas</Td>
            <Td>
              <Progress value={100} />
            </Td>
          </Tr>
          <Tr>
            <Td>Permasalahan Gula Nasional</Td>
            <Td>Done</Td>
            <Td>Arahan Menteri Perjanjian Kinerja Prioritas</Td>
            <Td>
              <Progress value={100} />
            </Td>
          </Tr>
          <Tr>
            <Td>Permasalahan Expor-Import Beras Nasional</Td>
            <Td>Done</Td>
            <Td>Arahan Menteri Perjanjian Kinerja Prioritas</Td>
            <Td>
              <Progress value={100} />
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>Showing 1 to 7 of 7</Tfoot>
      </Table>
    </Box>
  );
}

export default Data;
