import { Box, Spacer } from "@chakra-ui/react";
import Hero from "components/KyberAI/Hero";
import CrystalsBackground from "components/Shared/CrystalsBackground";
import KyberAITables from "components/KyberAI/KyberAITables";
import Introduce from "components/KyberAI/Introduce";
import MoreSignal from "components/KyberAI/MoreSignal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KyberAI",
  description:
    "Get Alpha Before It Happens - KyberAI helps you Ape Smart when trading crypto, the first AI-powered tool of its kind.",
};

export default function KyberAI() {
  return (
    <>
      <Box position="relative">
        <CrystalsBackground />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <Hero />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box position="relative" bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Spacer height={{ base: "100px", md: "160px" }} />
        <KyberAITables />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <Introduce />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <MoreSignal />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
    </>
  );
}
