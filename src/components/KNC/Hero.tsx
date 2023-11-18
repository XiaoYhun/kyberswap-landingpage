import { Button, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import FeatureImage from "components/Shared/FeatureImage";
export default function Hero() {
  return (
    <BoxInViewMotion>
      <Container>
        <Stack alignItems={{ base: "left", md: "center" }} direction={{ base: "column", md: "row" }} gap="16px">
          <Flex flex={5} align={"center"} justify={"left"}>
            <Stack spacing="16px" w={"full"}>
              <Heading fontSize="xl" fontWeight="semibold" className="inViewChild">
                KNC
              </Heading>
              <Heading size="2xl" lineHeight="normal" fontWeight="semibold" className="inViewChild">
                Kyber Network Crystal
                <br />
                <Text color="green.400">(KNC)</Text>
              </Heading>
              <Text color="whiteAlpha.600" lineHeight="24px" fontWeight="normal" className="inViewChild">
                KNC is a utility and governance token and an integral part of Kyber Network and its flagship product
                KyberSwap.
              </Text>
              <Flex gap="16px" mt="16px" direction={{ base: "column", md: "row" }} alignItems="flex-start">
                <Button variant="outline" size="lg" as="a" target="_blank" className="inViewChild">
                  Trade Now
                </Button>
              </Flex>
            </Stack>
          </Flex>
          <Flex flex={4} direction="column" gap="24px">
            <FeatureImage src="/assets/images/kyberdao.png" alt="KNC" />
          </Flex>
        </Stack>
      </Container>
    </BoxInViewMotion>
  );
}
