import { Box, Container, Spacer } from "@chakra-ui/react";
import Stars from "components/Home/Stars";
import BuyLowSellHigh from "components/LimitOrders/BuyLowSellHigh";
import FasterSettlement from "components/LimitOrders/FasterSettlement";
import GasFreeTrades from "components/LimitOrders/GasFreeTrades";
import GaslessCancellations from "components/LimitOrders/GaslessCancellations";
import Hero from "components/LimitOrders/Hero";
import CrystalsBackground from "components/Shared/CrystalsBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limit Orders",
  description:
    "Trade Flawlessly On Your Terms - Use Limit Orders to trade at the price you set while enjoying gasless, slippage free trades.",
};

export default function LimitOrder() {
  return (
    <>
      <Box position="relative" overflow="hidden">
        <CrystalsBackground />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <Hero />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <BuyLowSellHigh />
      <Box position="relative" bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)" zIndex={0}>
        <Stars />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <GasFreeTrades />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <FasterSettlement />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <GaslessCancellations />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
    </>
  );
}
