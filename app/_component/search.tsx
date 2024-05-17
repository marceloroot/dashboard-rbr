import { SearchIcon } from "@chakra-ui/icons";
import { FormControl, Input, Button } from "@chakra-ui/react";

const Search = () => {
  return (
    <FormControl p={0} m={0} position="relative">
      {" "}
      {/* Define position="relative" no FormControl */}
      <Input type="email" pr="40px" />
      <Button position="absolute" right="0" h="100%" variant="ghost" zIndex="1">
        {" "}
        {/* Adiciona zIndex="1" ao botão */}
        <SearchIcon />
      </Button>
    </FormControl>
  );
};

export default Search;
