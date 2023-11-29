import { Box, Spacer } from "@chakra-ui/react";
import Hero from "components/KNC/Hero";
import MoreInformation from "components/KNC/MoreInformation";
import TokenUtility from "components/KNC/TokenUtility";
import WhereToBuy from "components/KNC/WhereToBuy";
import WhereToStore from "components/KNC/WhereToStore";
import CrystalsBackground from "components/Shared/CrystalsBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyber Network Crystal",
  description:
    "KNC is a utility and governance token and an integral part of Kyber Network and its flagship product KyberSwap.",
};

export default function KNC() {
  return (
    <>
      <Box position="relative">
        <CrystalsBackground />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <Hero />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box bg="linear-gradient(169deg, rgba(255, 255, 255, 0.10) 8.07%, rgba(48, 211, 203, 0.20) 91.93%)">
        <Spacer height={{ base: "100px", md: "160px" }} />
        <TokenUtility />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Spacer height={{ base: "100px", md: "160px" }} />
        <WhereToBuy />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Spacer height={{ base: "100px", md: "160px" }} />
        <WhereToStore />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box bg="linear-gradient(169deg, rgba(255, 255, 255, 0.10) 8.07%, rgba(48, 211, 203, 0.20) 91.93%)">
        <Spacer height={{ base: "100px", md: "160px" }} />
        <MoreInformation />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
    </>
  );
}
