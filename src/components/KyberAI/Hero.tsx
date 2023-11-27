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
            <Stack gap="32px" w={"full"}>
              <Flex gap="16px" direction="column">
                <Heading fontSize="xl" fontWeight="normal" className="inViewChild">
                  KyberAI
                </Heading>
                <Heading size="2xl" lineHeight="normal" fontWeight="semibold" className="inViewChild">
                  Get Alpha Before It Happens
                </Heading>
                <Text color="whiteAlpha.600" lineHeight="24px" fontWeight="normal" className="inViewChild">
                  KyberAI helps you Ape Smart when trading crypto, the first AI-powered tool of its kind.
                </Text>
              </Flex>
              <Flex gap="24px">
                <ButtonWithAnimatedArrowUpRight
                  variant="solid"
                  size="lg"
                  className="inViewChild"
                  as="a"
                  href="https://kyberswap.com/KyberAI/About"
                  target="_blank"
                >
                  Get Started
                </ButtonWithAnimatedArrowUpRight>
                <ButtonWithAnimatedArrowUpRight
                  variant="outline"
                  size="lg"
                  className="inViewChild"
                  as="a"
                  href="https://docs.kyberswap.com/kyberswap-solutions/kyberai"
                  target="_blank"
                >
                  Learn More
                </ButtonWithAnimatedArrowUpRight>
              </Flex>
            </Stack>
          </Flex>
          <Flex flex={4} direction="column" gap="24px">
            <FeatureImage src="/assets/images/kyber-ai.png" alt="KNC" objectFit="cover" />
          </Flex>
        </Stack>
      </Container>
    </BoxInViewMotion>
  );
}
