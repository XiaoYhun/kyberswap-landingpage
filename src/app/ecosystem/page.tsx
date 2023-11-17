import { Box, Container, Spacer } from "@chakra-ui/react";
import SpinningEcosystem from "components/motion/SpinningEcosystem";
import PartnersList from "components/Ecosystem/PartnersList";
import Hero from "components/Ecosystem/Hero";

export default function Ecosystem() {
  return (
    <>
      <Box position="absolute" top="0" left="0" right="0" zIndex={0} width="100%" h="640px" bg="#090909">
        <SpinningEcosystem />
      </Box>
      <Hero />
      <Box w="100%" minH="700px" bg="grey.900">
        <Container>
          <PartnersList />
        </Container>
        <Spacer h="100px" />
      </Box>
    </>
  );
}
