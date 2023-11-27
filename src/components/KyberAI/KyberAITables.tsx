import { Box, Center, Container, Heading } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import Image from "next/image";

export default function KyberAITables() {
  return (
    <BoxInViewMotion>
      <Container>
        <Heading size="2xl" mb="60px" textAlign="center">
          Discover opportunities & threats with KyberAI Bullish & Bearish Ratings
        </Heading>
        <Box position="relative" w="full" h="328px" mb="40px">
          <Image src="/assets/images/kyber-ai-table.png" alt="KyberAI bullish" fill style={{ objectFit: "contain" }} />
        </Box>
        <Center>
          <ButtonWithAnimatedArrowUpRight
            size="lg"
            variant="secondary"
            as="a"
            href="https://kyberswap.com/KyberAI/About"
            target="_blank"
          >
            View More
          </ButtonWithAnimatedArrowUpRight>
        </Center>
      </Container>
    </BoxInViewMotion>
  );
}
