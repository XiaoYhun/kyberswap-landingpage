"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { HighlightGroup, HighlighterItem } from "components/motion/Highlighter";
import Image from "next/image";
import { ChevronDown } from "react-feather";

const WALLETS = [
  {
    imageSrc: "/assets/svg/wallets/metamask.svg",
    title: "Metamask",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/rabby.svg",
    title: "Rabby",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/trustwallet.svg",
    title: "Trust Wallet",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/blocto.svg",
    title: "Blocto",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/krystal.svg",
    title: "Krystal",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/wallet-connect.svg",
    title: "WalletConnect",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/brave.svg",
    title: "Brave Wallet",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/safe.svg",
    title: "Safe",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/coinbase.svg",
    title: "Coinbase",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Coin98",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
];
export default function Wallets() {
  return (
    <Flex direction="column" align="center" justify="center" w="100%" gap="40px">
      <Flex
        direction="column"
        gap="24px"
        align="center"
        p={{ base: "12px", md: "0" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading size="2xl">Connect with Your Favorite Wallets</Heading>
        <Text color="whiteAlpha.600" fontWeight="normal">
          Plug and play your preferred Web3 wallets and get access to DeFi’s trading toolbox of choice.{" "}
          <Link color="green.400" href="https://kyberswap.com/buy-crypto">
            Get started!
          </Link>
        </Text>
      </Flex>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing="48px">
        {WALLETS.slice(0, 3).map((wallet) => {
          return <WalletCard key={wallet.title} wallet={wallet} />;
        })}
      </SimpleGrid>
      <Accordion mt="-12px" allowToggle>
        <AccordionItem border="none" overflow="visible">
          {({ isExpanded }) => (
            <>
              <AccordionPanel pt="36px">
                <SimpleGrid columns={[1, 1, 2, 3]} spacing="48px">
                  {WALLETS.slice(3, WALLETS.length).map((wallet) => {
                    return <WalletCard key={wallet.title} wallet={wallet} />;
                  })}
                </SimpleGrid>
              </AccordionPanel>
              <AccordionButton border="none" as="div" display="flex" justifyContent="center" _hover={{}}>
                <Button variant="outline" rounded="3xl" p="16px 24px">
                  {isExpanded ? "Show Less" : "View More"}
                  <AccordionIcon />
                </Button>
              </AccordionButton>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

const WalletCard = ({ wallet }: { wallet: (typeof WALLETS)[number] }) => {
  return (
    <Flex
      direction="column"
      align="center"
      rounded="3xl"
      borderWidth={1}
      borderColor="greyAlpha.200"
      bg="greyAlpha.50"
      p="40px 24px 24px 24px"
      position="relative"
      w="280px"
      role="group"
    >
      <Flex
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)"
        h="64px"
        w="64px"
        align="center"
        justify="center"
      >
        <Flex
          h="64px"
          w="64px"
          rounded="full"
          boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.32), 0px 0px 1px 0px rgba(40, 41, 61, 0.08)"
          background="grey.800"
          align="center"
          justify="center"
          backgroundClip="padding-box"
          border="1.5px solid transparent"
          _before={{
            content: "''",
            position: "absolute",
            inset: 0,
            zIndex: -1,
            margin: "-1.5px",
            backgroundImage: "linear-gradient(to right top, #4B46E5, #09ffa1, #d8e70d, #e7520d)",
            backgroundSize: "200% 100%",
            borderRadius: "inherit",
            transition: "all 0.4s ease",
          }}
          _groupHover={{
            _before: {
              backgroundPositionX: "100%",
            },
          }}
        >
          <Box position="relative" w="36px" h="36px">
            <Image src={wallet.imageSrc} fill alt={wallet.title} />
          </Box>
        </Flex>
      </Flex>

      <Text mb="12px">{wallet.title}</Text>
      <Text fontSize="sm" color="whiteAlpha.600">
        {wallet.desc}
      </Text>
      <Badge variant="secondary" position="absolute" top="6px" right="8px">
        Wallet
      </Badge>
    </Flex>
  );
};
