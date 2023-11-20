import { Spacer } from "@chakra-ui/react";
import Hero from "components/LiquidityProtocols/Hero";
import CrystalsBackground from "components/Shared/CrystalsBackground";

export default function LiquidityProtocols() {
  return (
    <>
      <CrystalsBackground />
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Hero />
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Spacer height={{ base: "100px", md: "160px" }} />
    </>
  );
}
