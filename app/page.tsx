import { Box } from "@chakra-ui/react";
import Header from "./_component/header";

export default function Home() {
  return (
    <Box
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" // Sombra
      borderBottom="2px solid rgba(0, 0, 0, 0.1)" // Borda na parte inferior
    >
      <Header />
    </Box>
  );
}
