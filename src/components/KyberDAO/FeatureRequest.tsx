import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";

export default function FeatureRequest() {
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
              Feature Request
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Is your favorite product feature missing on KyberSwap? Share your thoughts here!
            </Text>
            <ButtonWithAnimatedArrowUpRight
              variant="outline"
              size="lg"
              as="a"
              href="https://kyberswap.canny.io/feature-request"
              target="_blank"
              className="inViewChild"
            >
              Request
            </ButtonWithAnimatedArrowUpRight>
          </Stack>
          <Box flex={4}>
            <FeatureImage src="/assets/images/kyberdao-feature-request.png" alt="Feature request" />
          </Box>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
