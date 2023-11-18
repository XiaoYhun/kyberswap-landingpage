import { Box, Spacer } from "@chakra-ui/react";
import FeatureRequest from "components/KyberDAO/FeatureRequest";
import Hero from "components/KyberDAO/Hero";
import KNCUtility from "components/KyberDAO/KNCUtility";
import KyberDAOStats from "components/KyberDAO/KyberDAOStats";
import Stake from "components/KyberDAO/Stake";
import Vote from "components/KyberDAO/Vote";

export default function KyberDAO() {
  return (
    <>
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Hero />
      <Spacer height={{ base: "100px", md: "160px" }} />
      <KyberDAOStats />
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Spacer height={{ base: "100px", md: "160px" }} />
        <Stake />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <Vote />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Spacer height={{ base: "100px", md: "160px" }} />
        <KNCUtility />
        <Spacer height={{ base: "100px", md: "160px" }} />
        <FeatureRequest />
        <Spacer height={{ base: "100px", md: "160px" }} />
      </Box>
    </>
  );
}
