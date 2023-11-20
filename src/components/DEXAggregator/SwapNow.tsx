import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

export default function SwapNow() {
  return (
    <BoxInViewMotion>
      <Container>
        <Flex
          h="320px"
          alignItems={{ base: "left", md: "center" }}
          direction={{ base: "column", md: "row" }}
          gap="16px"
        >
          <Stack gap="16px" flex={5}>
            <Heading size="2xl" className="inViewChild">
              Swap Now for Superior Rates
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Optimized real-time trades, across 100+ liquidity sources.
            </Text>
          </Stack>
          <Box flex={4}>
            <FeatureImage src="/assets/images/aggregator/aggregator-1.png" alt="aggregator 1" />
          </Box>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
