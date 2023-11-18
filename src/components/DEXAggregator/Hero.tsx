import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import FeatureImage from "components/Shared/FeatureImage";
export default function Hero() {
  return (
    <BoxInViewMotion>
      <Container>
        <Stack alignItems={{ base: "left", md: "center" }} direction={{ base: "column", md: "row" }} gap="16px">
          <Flex flex={5} align={"center"} justify={"left"}>
            <Stack spacing="16px" w={"full"}>
              <Heading fontSize="xl" fontWeight="semibold" className="inViewChild">
                DEX Aggregator
              </Heading>
              <Heading size="2xl" lineHeight="normal" fontWeight="semibold" className="inViewChild">
                Instantly Trade Your Tokens With KyberSwap
              </Heading>
              <Text color="whiteAlpha.600" lineHeight="24px" fontWeight="normal" className="inViewChild">
                A great trading experience with seamless swaps, excellent rates and low gas fees.
              </Text>
              <Flex gap="16px" mt="16px" direction={{ base: "column", md: "row" }} alignItems="flex-start">
                <ButtonWithAnimatedArrowUpRight
                  variant="solid"
                  size="lg"
                  as="a"
                  href="https://kyberswap.com/swap/ethereum"
                  target="_blank"
                  className="inViewChild"
                >
                  Trade Now
                </ButtonWithAnimatedArrowUpRight>
                <ButtonWithAnimatedArrowUpRight
                  variant="outline"
                  size="lg"
                  as="a"
                  href="https://docs.kyberswap.com/kyberswap-solutions/kyberswap-aggregator"
                  target="_blank"
                  className="inViewChild"
                >
                  Learn More
                </ButtonWithAnimatedArrowUpRight>
              </Flex>
            </Stack>
          </Flex>
          <Flex flex={4} direction="column" gap="24px">
            Top traded token
          </Flex>
        </Stack>
      </Container>
    </BoxInViewMotion>
  );
}
