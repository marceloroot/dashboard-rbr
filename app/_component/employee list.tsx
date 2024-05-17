"use client";
import { Flex } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import MenuOrderList from "./menu-order-list";
import Search from "./search";
import { EditIcon } from "@chakra-ui/icons";
import DialogDelete from "./dialog-delete";
import RoundButtonFixed from "./rounded-button-fixed";

interface employeesI {
  id: string;
  nome: string;
  cargo: string;
  departamento: string;
}
const employees: employeesI[] = [
  {
    id: "1234",
    nome: "Marcelo de Lima Gomes",
    cargo: "Administrador",
    departamento: "Financeiro",
  },
  {
    id: "4321",
    nome: "João Pedro da Silva Neto Santos",
    cargo: "Contador",
    departamento: "Financeiro",
  },
  {
    id: "43441",
    nome: "Lucas Augusto Santos",
    cargo: "Analista de finança",
    departamento: "Financeiro",
  },
  {
    id: "5678",
    nome: "Carla Oliveira",
    cargo: "Analista de Marketing",
    departamento: "Marketing",
  },
  {
    id: "9876",
    nome: "Rafaela Pereira",
    cargo: "Desenvolvedor de Software",
    departamento: "Tecnologia da Informação",
  },
  {
    id: "2468",
    nome: "Pedro Henrique Almeida",
    cargo: "Gerente de Vendas",
    departamento: "Vendas",
  },
];
const EmployeeList = () => {
  return (
    <Flex direction="column" height="100vh">
      <Flex justifyContent="flex-end" alignItems="center" mb={4} gap={2}>
        <Search />
        <MenuOrderList />
      </Flex>
      <Flex flex="1" overflowY="auto">
        <TableContainer width="100%">
          <Table variant="simple" size="lg">
            <TableCaption>Lista de Funcionarios</TableCaption>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Cargo</Th>
                <Th>Departamento</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {employees.map((employ) => (
                <Tr key={employ.id}>
                  <Td>{employ.nome}</Td>
                  <Td>{employ.cargo}</Td>
                  <Td>{employ.departamento}</Td>

                  <Td display="flex" gap={7}>
                    <EditIcon
                      fontSize={20}
                      color="blue.700"
                      cursor={"pointer"}
                    />
                    <DialogDelete />
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Nome</Th>
                <Th>Cargo</Th>
                <Th>Departamento</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
      <RoundButtonFixed />
    </Flex>
  );
};

export default EmployeeList;
