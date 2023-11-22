import { Box, Button, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import FeatureImage from "components/Shared/FeatureImage";
import { SwapIcon } from "components/SVG/SwapIcon";
import { getChainsConfig } from "hooks/services";
import Image from "next/image";

const KNC_Eligible_Chains = [1, 137, 1101, 56, 199, 42161, 10, 324, 59144, 8453, 534352];
export default async function Hero() {
  const chains = await getChainsConfig();
  return (
    <BoxInViewMotion>
      <Container>
        <Stack alignItems={{ base: "left", md: "center" }} direction={{ base: "column", md: "row" }} gap="16px">
          <Flex flex={5} align={"center"} justify={"left"}>
            <Stack gap="32px" w={"full"}>
              <Flex gap="16px" direction="column">
                <Heading fontSize="xl" fontWeight="normal" className="inViewChild">
                  KNC Token
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
              </Flex>
              <Button
                variant="solid"
                size="lg"
                className="inViewChild"
                mt="16px"
                as="a"
                href="https://kyberswap.com/swap/ethereum/knc-to-usdt"
                target="_blank"
              >
                Trade Now <SwapIcon />
              </Button>
              <Stack gap="16px" direction="row" className="inViewChild">
                <>
                  {KNC_Eligible_Chains.map((chainId: number) => {
                    const chain = chains.find((c: any) => c.chainId === chainId.toString());
                    return (
                      <Box rounded="full" h="36px" w="36px" position="relative">
                        <Image src={chain.logoUrl} fill alt={chain.displayName} />
                      </Box>
                    );
                  })}
                </>
              </Stack>
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
