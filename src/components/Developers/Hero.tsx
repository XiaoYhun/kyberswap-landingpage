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
                Developers
              </Heading>
              <Heading size="2xl" lineHeight="normal" fontWeight="semibold" className="inViewChild">
                Build DeFi With Us
              </Heading>
              <Text color="whiteAlpha.600" lineHeight="24px" fontWeight="normal" className="inViewChild">
                Integrate KyberSwap&apos;s protocols & tools to build world-class DeFi experiences.
              </Text>
              <Flex gap="16px" mt="16px" direction={{ base: "column", md: "row" }} alignItems="flex-start">
                <ButtonWithAnimatedArrowUpRight
                  variant="outline"
                  size="lg"
                  as="a"
                  href="https://docs.kyberswap.com/getting-started/quickstart#developer-guides"
                  target="_blank"
                  className="inViewChild"
                >
                  View Docs
                </ButtonWithAnimatedArrowUpRight>
              </Flex>
            </Stack>
          </Flex>
          <Flex flex={4} direction="column" gap="24px">
            <FeatureImage src="/assets/images/developers.png" alt="Kyberswap developers" />
          </Flex>
        </Stack>
      </Container>
    </BoxInViewMotion>
  );
}
