import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import FeatureImage from "components/Shared/FeatureImage";
export default function DynamicTradeRoutes() {
  return (
    <BoxInViewMotion>
      <Container>
        <Stack alignItems={{ base: "left", md: "center" }} direction={{ base: "column", md: "row" }} gap="16px">
          <Flex flex={6} direction="column" gap="24px">
            <FeatureImage src="/assets/images/aggregator/routes.png" alt="routes" />
          </Flex>
          <Flex flex={4} align={"center"} justify={"left"}>
            <Stack spacing="16px" w={"full"}>
              <Heading size="2xl" lineHeight="normal" fontWeight="semibold" className="inViewChild">
                Dynamic Trade Routes
              </Heading>
              <Text color="whiteAlpha.600" lineHeight="24px" fontWeight="normal" className="inViewChild">
                Experience cutting-edge technology and get superior rates when you swap. Optimize trades and maximize
                gains with KyberSwap!
              </Text>
              <Flex gap="16px" mt="16px" direction={{ base: "column", md: "row" }} alignItems="flex-start">
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
        </Stack>
      </Container>
    </BoxInViewMotion>
  );
}
