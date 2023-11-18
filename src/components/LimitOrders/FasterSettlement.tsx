import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

export default function FasterSettlement() {
  return (
    <BoxInViewMotion>
      <Container>
        <Flex
          h="320px"
          alignItems={{ base: "left", md: "center" }}
          direction={{ base: "column", md: "row" }}
          gap="16px"
        >
          <Box flex={4} order={{ base: 2, md: 1 }}>
            <FeatureImage src="/assets/images/faster-settlement.png" alt="KyberSwap faster settlement" />
          </Box>
          <Stack gap="16px" flex={5} order={{ base: 1, md: 2 }}>
            <Heading size="2xl" className="inViewChild">
              Faster Settlement
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Get your orders filled faster through KyberSwap’s vast taker network. Place your order now.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
