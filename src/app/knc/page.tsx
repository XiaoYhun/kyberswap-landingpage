import { Spacer } from "@chakra-ui/react";
import Hero from "components/KNC/Hero";
import CrystalsBackground from "components/Shared/CrystalsBackground";

export default function KNC() {
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
