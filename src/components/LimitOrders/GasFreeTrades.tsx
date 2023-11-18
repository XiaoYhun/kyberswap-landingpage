import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

export default function GasFreeTrades() {
  return (
    <BoxInViewMotion>
      <Container>
        <Flex h="320px" alignItems={{ base: "left", md: "center" }} direction={{ base: "column", md: "row" }}>
          <Stack gap="16px" flex={5}>
            <Heading size="2xl" className="inViewChild">
              Gas Free Trades
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Place limit orders without any gas fees.
            </Text>
          </Stack>
          <Box flex={4}>
            <FeatureImage src="/assets/images/gas-free.png" alt="KyberSwap gas free" />
          </Box>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
