import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";

const PARTNERS = [
  {
    src: "/assets/svg/knc/wallets/ledger.svg",
    alt: "Ledger",
    url: "https://www.ledger.com/",
  },
  {
    src: "/assets/svg/knc/wallets/logo_metamask.svg",
    alt: "Metamask",
    url: "https://metamask.io/",
  },
  {
    src: "/assets/svg/knc/wallets/coin98.svg",
    alt: "Coin98",
    url: "https://coin98.com/",
  },
  {
    src: "/assets/svg/knc/wallets/logo_krystal.svg",
    alt: "Krystal",
    url: "https://krystal.app/",
  },
  {
    src: "/assets/svg/knc/wallets/trezor.svg",
    alt: "Trezor",
    url: "https://trezor.io/",
  },
  {
    src: "/assets/svg/knc/wallets/myether_wallet.svg",
    alt: "MEW",
    url: "https://www.myetherwallet.com/",
  },
  {
    src: "/assets/svg/knc/wallets/trust_wallet.svg",
    alt: "Trust wallet",
    url: "https://trustwallet.com/",
  },
  {
    src: "/assets/svg/knc/wallets/rabby.svg",
    alt: "Rabby Wallet",
    url: "https://rabby.io/",
    height: "44px",
  },
  {
    src: "/assets/svg/knc/wallets/frame.svg",
    alt: "Frame",
    url: "https://frame.sh/",
    height: "28px",
  },
  {
    src: "/assets/svg/knc/wallets/web3auth.svg",
    alt: "Web3 auth",
    url: "https://web3auth.io/",
    height: "28px",
  },
  {
    src: "/assets/svg/knc/wallets/argent.svg",
    alt: "Argen",
    url: "https://www.argent.xyz/",
  },
  {
    src: "/assets/svg/knc/wallets/safe_gnosis.svg",
    alt: "Safe",
    url: "https://safe.global/",
  },
];
export default function WhereToStore() {
  return (
    <BoxInViewMotion>
      <Container>
        <Heading size="2xl" textAlign="center" mb="60px" className="inViewChild">
          Where to store KNC
        </Heading>
        <Flex gap="48px" wrap="wrap" align="center" justify="space-around" className="inViewChild">
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
      width="130px"
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
