import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";

export default function GaslessCancellations() {
  return (
    <BoxInViewMotion>
      <Container>
        <Flex h="320px" alignItems="center" direction={{ base: "column", md: "row" }} gap="16px">
          <Stack gap="16px" flex={5}>
            <Heading size="2xl" className="inViewChild">
              Gasless Cancellations
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Cancel and update your limit orders without any gas fees. First of its kind. Convenient.
            </Text>
          </Stack>
          <Box flex={4}>
            <FeatureImage src="/assets/images/gasless.png" alt="KyberSwap gasless" />
          </Box>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
