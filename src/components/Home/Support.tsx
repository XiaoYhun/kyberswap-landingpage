import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import Image from "next/image";

export default function Support() {
  return (
    <BoxInViewMotion>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={4} className="inViewChild">
          <Box w="320px" h="320px" position="relative">
            <Image src="/assets/images/support.png" alt="support 247" fill quality={100} />
          </Box>
        </Box>
        <Flex flex={6} p={{ base: "12px", md: "0" }} direction="column" gap="16px">
          <Heading size="2xl" lineHeight="normal" className="inViewChild">
            Always Here for You: <br /> 24/7 Support
          </Heading>
          <Text lineHeight="tall" color="whiteAlpha.600" fontWeight="normal" className="inViewChild">
            Our dedicated team of experts are available 24 hours a day to assist you with any queries, concerns, or
            technical issues you might encounter.
          </Text>
          <Stack direction="row" gap="16px" mt="16px" wrap="wrap">
            <ButtonWithAnimatedArrowUpRight
              variant="outline"
              rounded="2xl"
              padding="16px 24px"
              as="a"
              href="https://kyberswap.com/swap/ethereum"
              target="_blank"
              flexShrink={0}
              className="inViewChild"
            >
              Contact Support
            </ButtonWithAnimatedArrowUpRight>
            <ButtonWithAnimatedArrowUpRight
              variant="outline"
              rounded="2xl"
              padding="16px 24px"
              flexShrink={0}
              className="inViewChild"
            >
              View Docs
            </ButtonWithAnimatedArrowUpRight>
          </Stack>
        </Flex>
      </Flex>
    </BoxInViewMotion>
  );
}
