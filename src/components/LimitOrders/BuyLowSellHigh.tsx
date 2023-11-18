import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

export default function BuyLowSellHigh() {
  return (
    <BoxInViewMotion bg="linear-gradient(180deg, rgba(255, 255, 255, 0.10) 8.07%, rgba(48, 211, 203, 0.20) 91.93%)">
      <Container>
        <Stack textAlign={{ base: "left", md: "center" }} gap="16px" p="80px 0">
          <Heading size="2xl" className="inViewChild">
            Buy Low, Sell High At Your Desired Price
          </Heading>
          <Text color="white" fontWeight="normal" className="inViewChild">
            Trade at your preferred price, gas-free. Explore KyberSwap's Limit Orders now.
          </Text>
        </Stack>
      </Container>
    </BoxInViewMotion>
  );
}
