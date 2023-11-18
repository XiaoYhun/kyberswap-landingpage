import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";

export default function Vote() {
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
              Vote
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Leave your mark on the key decisions that drive the evolution of KyberSwap and KNC.
            </Text>
            <ButtonWithAnimatedArrowUpRight
              variant="secondary"
              size="lg"
              as="a"
              href="https://kyberswap.com/kyberdao/vote"
              target="_blank"
              className="inViewChild"
            >
              Vote Now
            </ButtonWithAnimatedArrowUpRight>
          </Stack>
          <Box flex={4}>
            <FeatureImage src="/assets/images/kyberdao-vote.png" alt="KyberDAO vote" />
          </Box>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
