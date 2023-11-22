import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";

const PARTNERS = [
  {
    src: "/assets/svg/knc/logo_kyberswap.svg",
    alt: "Kyberswap",
    url: "https://www.kyberswap.com/swap",
    height: "48px",
  },
  {
    src: "/assets/svg/knc/logo_krystal.svg",
    alt: "Krystal",
    url: "https://krystal.app/",
  },
  {
    src: "/assets/svg/knc/logo_binance.svg",
    alt: "Binance",
    url: "https://www.binance.com/en",
  },
  {
    src: "/assets/svg/knc/logo_mexc.svg",
    alt: "MEXC",
    url: "https://www.mexc.com/",
    height: "28px",
  },
  {
    src: "/assets/svg/knc/logo_etoro.svg",
    alt: "Etoro",
    url: "https://www.etoro.com/",
  },
  {
    src: "/assets/svg/knc/htx.svg",
    alt: "HTX",
    url: "https://www.huobi.com/en-us/",
  },
  {
    src: "/assets/svg/knc/logo_upbit.svg",
    alt: "Upbit",
    url: "https://sg.upbit.com/home",
    height: "24px",
  },
  {
    src: "/assets/svg/knc/logo_kraken.svg",
    alt: "Kraken",
    url: "https://www.kraken.com/",
    height: "24px",
  },
  {
    src: "/assets/svg/knc/logo_kucoin.svg",
    alt: "Kucoin",
    url: "https://www.kucoin.com/",
  },
  {
    src: "/assets/svg/knc/gate-io.svg",
    alt: "Gate.io",
    url: "https://www.gate.io/web3",
  },
  {
    src: "/assets/svg/knc/logo_coinbase.svg",
    alt: "Coinbase",
    url: "https://www.coinbase.com/",
    height: "24px",
  },
  {
    src: "/assets/svg/knc/logo_bithumb.svg",
    alt: "Bithumb",
    url: "https://www.bithumb.com/react/",
    height: "44px",
  },
  {
    src: "/assets/svg/knc/logo_gemini.svg",
    alt: "Gemini",
    url: "https://www.gemini.com/apac/singapore",
  },
  {
    src: "/assets/svg/knc/okx.svg",
    alt: "OKX",
    url: "https://www.okx.com/web3",
    height: "28px",
  },
  {
    src: "/assets/svg/knc/logo_tokocrypto.svg",
    alt: "Tokocrypto",
    url: "https://www.tokocrypto.com/",
    height: "40px",
  },
  {
    src: "/assets/svg/knc/logo_bitrue.svg",
    alt: "Bit true",
    url: "https://www.bitrue.com/home",
    height: "28px",
  },
  {
    src: "/assets/svg/knc/crypto.svg",
    alt: "Crypto.com",
    url: "https://crypto.com/sg",
  },
  {
    src: "/assets/svg/knc/swissborg.svg",
    alt: "Swiss borg",
    url: "https://swissborg.com/",
  },
  {
    src: "/assets/svg/knc/bitstamp.svg",
    alt: "Bit stamp",
    url: "https://www.bitstamp.net/",
    height: "28px",
  },
  {
    src: "/assets/svg/knc/bitkub.svg",
    alt: "bitkub",
    url: "https://www.bitkub.com/",
    height: "24px",
  },
];
export default function WhereToBuy() {
  return (
    <BoxInViewMotion>
      <Container>
        <Heading size="2xl" textAlign="center" mb="60px" className="inViewChild">
          Where to buy KNC
        </Heading>
        <Flex gap="32px" rowGap="48px" wrap="wrap" align="center" justify="space-around" className="inViewChild">
          <>
            {PARTNERS.map((p) => {
              return <Logo {...p} />;
            })}
          </>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}

const Logo = ({ src, alt, url, height }: { src: string; alt: string; url: string; height?: string }) => {
  return (
    <Box
      position="relative"
      height={height || "32px"}
      width="150px"
      minW="100px"
      as="a"
      href={url}
      target="_blank"
      transition="transform 0.1s ease"
      _hover={{ transform: "scale(1.1)" }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "contain", overflow: "visible" }} />
    </Box>
  );
};
