import { Box, Spacer } from "@chakra-ui/react";
import AggregatorStats from "components/DEXAggregator/AggregatorStats";
import DynamicTradeRoutes from "components/DEXAggregator/DynamicTradeRoutes";
import Hero from "components/DEXAggregator/Hero";
import LiquiditySources from "components/DEXAggregator/LiquiditySources";
import PennySaved from "components/DEXAggregator/PennySaved";
import SwapNow from "components/DEXAggregator/SwapNow";
import TrustedByTopDefi from "components/DEXAggregator/TrustedByTopDefi";
import CrystalsBackground from "components/Shared/CrystalsBackground";

export default function DEXAggregator() {
  return (
    <>
      <Box position="relative">
        <CrystalsBackground />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <Hero />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box bg="linear-gradient(180deg, rgba(255, 255, 255, 0.10) 8.07%, rgba(48, 211, 203, 0.20) 91.93%)">
        <AggregatorStats />
        <DynamicTradeRoutes />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Spacer height={{ base: "100px", md: "160px" }} />
        <SwapNow />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <PennySaved />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <TrustedByTopDefi />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <LiquiditySources />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
    </>
  );
}
