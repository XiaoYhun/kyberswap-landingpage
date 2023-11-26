import { Box, Center, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";
import coinGecko from "assets/svg/knc/coingecko.svg";
import coinMarketCap from "assets/svg/knc/coinmarketcap.svg";
import geckoTerminal from "assets/svg/knc/geckoterminal.svg";
const LINKS = [
  { src: coinGecko, alt: "Coingecko", url: "" },
  { src: coinMarketCap, alt: "Coinmarketcap", url: "" },
  { src: geckoTerminal, alt: "GeckoTerminal", url: "" },
];

export default function MoreInformation() {
  return (
    <BoxInViewMotion>
      <Container>
        <Flex align="center" justify="center" mb="60px" className="inViewChild">
          <Heading size="2xl">More information is available</Heading>
        </Flex>
        <SimpleGrid columns={3} gap="48px">
          <>
            {LINKS.map((l) => {
              return (
                <Center
                  key={l.alt}
                  h="152px"
                  rounded="xl"
                  bg="whiteAlpha.100"
                  p="16px"
                  as="a"
                  href={l.url}
                  target="_blank"
                  transition="all 0.2s ease"
                  _hover={{ bg: "whiteAlpha.200" }}
                  className="inViewChild"
                >
                  <Image src={l.src} alt={l.alt} />
                </Center>
              );
            })}
          </>
        </SimpleGrid>
      </Container>
    </BoxInViewMotion>
  );
}
