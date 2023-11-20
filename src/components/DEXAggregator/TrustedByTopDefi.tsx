import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

export default function TrustedByTopDefi() {
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
              Trusted by top DeFi Apps
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Top wallets, trading platforms and dapps utilise KyberSwap&apos;s Aggregator, because of its speed,
              reliability and effectiveness.
            </Text>
          </Stack>
          <Box flex={4}>
            <FeatureImage src="/assets/images/aggregator/aggregator-3.png" alt="aggregator 3" />
          </Box>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
