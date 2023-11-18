import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FeatureImage from "components/Shared/FeatureImage";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";

export default function KNCUtility() {
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
            <FeatureImage src="/assets/images/kyberdao.png" alt="KyberDAO Utility" />
          </Box>
          <Stack gap="16px" flex={5} order={{ base: 1, md: 2 }}>
            <Heading size="2xl" className="inViewChild">
              KNC Utility
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Start using your KNC to vote, earn protocol fees, enjoy gas refunds, and access other benefits on
              KyberSwap.
            </Text>
            <ButtonWithAnimatedArrowUpRight
              variant="secondary"
              size="lg"
              as="a"
              href="https://kyberswap.com/kyberdao/knc-utility"
              target="_blank"
              className="inViewChild"
            >
              KNC Utility
            </ButtonWithAnimatedArrowUpRight>
          </Stack>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
