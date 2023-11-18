import { Spacer } from "@chakra-ui/react";
import Hero from "components/DEXAggregator/Hero";

export default function DEXAggregator() {
  return (
    <>
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Hero />
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Spacer height={{ base: "100px", md: "160px" }} />
    </>
  );
}
