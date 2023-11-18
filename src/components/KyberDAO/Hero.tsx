import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import FeatureImage from "components/Shared/FeatureImage";
export default function Hero() {
  return (
    <BoxInViewMotion>
      <Container>
        <Stack alignItems={{ base: "left", md: "center" }} direction={{ base: "column", md: "row" }} gap="16px">
          <Flex flex={5} align={"center"} justify={"center"}>
            <Stack spacing="16px" w={"full"} maxW={"lg"}>
              <Heading fontSize="xl" fontWeight="semibold" className="inViewChild">
                KyberDAO
              </Heading>
              <Heading size="2xl" lineHeight="normal" fontWeight="semibold" className="inViewChild">
                The Future of KyberSwap, In Your Hands
              </Heading>
              <Text color="whiteAlpha.600" lineHeight="24px" fontWeight="normal" className="inViewChild">
                KyberSwap is governed by the community through KyberDAO. As a KNC holder, you can stake your tokens to
                vote on proposals that shape KyberSwap’s future and earn a portion of trading fees in return, along with
                other exciting benefits.
              </Text>
              <Flex gap="16px" mt="16px" direction={{ base: "column", md: "row" }} alignItems="flex-start">
                <ButtonWithAnimatedArrowUpRight
                  variant="outline"
                  size="lg"
                  as="a"
                  href="https://gov.kyber.org/"
                  target="_blank"
                  className="inViewChild"
                >
                  Forum
                </ButtonWithAnimatedArrowUpRight>
                <ButtonWithAnimatedArrowUpRight
                  variant="outline"
                  size="lg"
                  className="inViewChild"
                  arrowSize={24}
                  as="a"
                  target="_blank"
                  href="https://docs.kyberswap.com/governance/kyberdao"
                >
                  Learn More
                </ButtonWithAnimatedArrowUpRight>
              </Flex>
            </Stack>
          </Flex>
          <Flex flex={5} direction="column" gap="24px">
            <FeatureImage src="/assets/images/kyberdao-hero.png" alt="Kyberdao" />
          </Flex>
        </Stack>
      </Container>
    </BoxInViewMotion>
  );
}
