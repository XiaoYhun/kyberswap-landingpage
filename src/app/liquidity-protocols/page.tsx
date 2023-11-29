import { Box, Spacer } from "@chakra-ui/react";
import Stars from "components/Home/Stars";
import Farms from "components/LiquidityProtocols/Farms";
import Hero from "components/LiquidityProtocols/Hero";
import Pools from "components/LiquidityProtocols/Pools";
import CrystalsBackground from "components/Shared/CrystalsBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liquidity Protocols",
  description:
    "Earn More From Your Crypto - KyberSwap's capital efficient liquidity protocols help you earn trading fees and rewards from your crypto permissionlessly.",
};

export default function LiquidityProtocols() {
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
        <Pools />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box position="relative" bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Stars />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <Farms />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
    </>
  );
}
