import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

export default function PennySaved() {
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
            <FeatureImage src="/assets/images/aggregator/aggregator-2.png" alt="aggregator 2" />
          </Box>
          <Stack gap="16px" flex={5} order={{ base: 1, md: 2 }}>
            <Heading size="2xl" className="inViewChild">
              A Penny Saved, A Penny Earned
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Always save on gas costs with our efficient aggregator.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
