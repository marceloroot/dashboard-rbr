import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
const RoundButtonFixed = () => {
  return (
    <Button
      position="fixed"
      bottom="4"
      right="4"
      zIndex="10"
      colorScheme="blue"
      width={50}
      height={50}
      rounded={"full"}
    >
      <AddIcon />
    </Button>
  );
};

export default RoundButtonFixed;
