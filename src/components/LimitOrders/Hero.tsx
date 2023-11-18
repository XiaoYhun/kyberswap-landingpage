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
                Limit Orders
              </Heading>
              <Heading size="2xl" lineHeight="normal" fontWeight="semibold" className="inViewChild">
                Trade Flawlessly On Your Terms
              </Heading>
              <Text color="whiteAlpha.600" lineHeight="24px" fontWeight="normal" className="inViewChild">
                Use Limit Orders to trade at the price you set while enjoying gasless, slippage free trades.
              </Text>
              <Flex gap="16px" mt="16px" direction={{ base: "column", md: "row" }} alignItems="flex-start">
                <ButtonWithAnimatedArrowUpRight
                  variant="solid"
                  size="lg"
                  as="a"
                  href="https://kyberswap.com/limit/ethereum"
                  target="_blank"
                  className="inViewChild"
                >
                  Trade Now
                </ButtonWithAnimatedArrowUpRight>
                <ButtonWithAnimatedArrowUpRight
                  variant="outline"
                  size="lg"
                  className="inViewChild"
                  arrowSize={24}
                  as="a"
                  target="_blank"
                  href="https://docs.kyberswap.com/kyberswap-solutions/limit-order"
                >
                  Learn More
                </ButtonWithAnimatedArrowUpRight>
              </Flex>
            </Stack>
          </Flex>
          <Flex flex={5} direction="column" gap="24px">
            <FeatureImage src="/assets/images/limit-orders.png" alt="Kyberswap limit orders" />
          </Flex>
        </Stack>
      </Container>
    </BoxInViewMotion>
  );
}
