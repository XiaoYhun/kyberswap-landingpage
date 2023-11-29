import { Spacer } from "@chakra-ui/react";
import Hero from "components/Developers/Hero";
import CrystalsBackground from "components/Shared/CrystalsBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developers",
  description: "Build DeFi With Us - Integrate KyberSwap's protocols & tools to build world-class DeFi experiences.",
};

export default function Developers() {
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
