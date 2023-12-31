import { Box, Spacer } from "@chakra-ui/react";
import FeatureRequest from "components/KyberDAO/FeatureRequest";
import Hero from "components/KyberDAO/Hero";
import KNCUtility from "components/KyberDAO/KNCUtility";
import KyberDAOStats from "components/KyberDAO/KyberDAOStats";
import Stake from "components/KyberDAO/Stake";
import Vote from "components/KyberDAO/Vote";
import CrystalsBackground from "components/Shared/CrystalsBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KyberDAO",
  description:
    "KyberSwap is governed by the community through KyberDAO. As a KNC holder, you can stake your tokens to vote on proposals that shape KyberSwap’s future and earn a portion of trading fees in return, along with other exciting benefits.",
};

export default function KyberDAO() {
  return (
    <>
      <Box position="relative">
        <CrystalsBackground />
        <Spacer height={{ base: "100px", md: "200px" }} />
        <Hero />
        <Spacer height={{ base: "100px", md: "200px" }} />
      </Box>
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <KyberDAOStats />
        <Spacer height={{ base: "100px", md: "200px" }} />
        <Stake />
        <Spacer height={{ base: "100px", md: "200px" }} />
        <Vote />
        <Spacer height={{ base: "100px", md: "200px" }} />
      </Box>
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Spacer height={{ base: "100px", md: "200px" }} />
        <KNCUtility />
        <Spacer height={{ base: "100px", md: "200px" }} />
        <FeatureRequest />
        <Spacer height={{ base: "100px", md: "200px" }} />
      </Box>
    </>
  );
}
