"use client";
import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
type OrdenationType = "ASC" | "DESC";
const MenuOrderList = () => {
  const [ordering, setOrdering] = useState<OrdenationType>("ASC");
  const handClickChangeOrdering = (ordenationType: OrdenationType) => {
    setOrdering(ordenationType);
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        fontSize="15px"
        gap={2}
      >
        Filter : {ordering}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handClickChangeOrdering("ASC")}>
          Lista em forma ascendent
        </MenuItem>
        <MenuItem onClick={() => handClickChangeOrdering("DESC")}>
          Lista em forma descendente
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuOrderList;
