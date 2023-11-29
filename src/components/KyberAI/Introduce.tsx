import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import { getChainsConfig } from "services";
import Image from "next/image";

const KyberAI_Eligible_Chains = [1, 42161, 137, 10, 56, 43114, 250];

export default async function Introduce() {
  const chains = await getChainsConfig();
  return (
    <BoxInViewMotion>
      <Container>
        <Heading size="2xl" textAlign="center" mb="16px" className="inViewChild">
          We introduce to you, KyberAI
        </Heading>
        <Text textStyle="sub" textAlign="center" mb="40px" className="inViewChild">
          An intelligent platform that provides valuable insights on 4000+ Tokens across 7 Chains
        </Text>
        <Flex justify="center" gap="36px" className="inViewChild">
          <>
            {KyberAI_Eligible_Chains.map((chainId: number) => {
              const chain = chains.find((c: any) => c.chainId === chainId.toString());
              return (
                <Box rounded="full" h="36px" w="36px" position="relative" key={chainId}>
                  <Image src={chain.logoUrl} fill alt={chain.displayName} />
                </Box>
              );
            })}
          </>
        </Flex>
        <Spacer h="120px" />
        <Box
          w="full"
          rounded="16px"
          overflow="hidden"
          h="0"
          paddingBottom="56%"
          position="relative"
          sx={{ iframe: { w: "full", h: "full", position: "absolute", top: 0, left: 0 } }}
          className="inViewChild"
        >
          <iframe
            loading="lazy"
            src="https://www.youtube.com/embed/ZKJuZQqWsHs?rel=0&controls=0"
            title="Meet KyberAI | Now In Beta | KyberSwap"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
          />
        </Box>
      </Container>
    </BoxInViewMotion>
  );
}
