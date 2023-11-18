import { Spacer } from "@chakra-ui/react";
import Hero from "components/Developers/Hero";

export default function Developers() {
  return (
    <>
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Hero />
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Spacer height={{ base: "100px", md: "160px" }} />
    </>
  );
}
