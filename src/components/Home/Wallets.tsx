import { Badge, Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { HighlightGroup, HighlighterItem } from "components/motion/Highlighter";
import Image from "next/image";
import { ChevronDown } from "react-feather";

const WALLETS = [
  {
    imageSrc: "/assets/svg/metamask.svg",
    title: "Metamask",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/metamask.svg",
    title: "Metamask",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
  {
    imageSrc: "/assets/svg/metamask.svg",
    title: "Metamask",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
  },
];
export default function Wallets() {
  return (
    <Flex direction="column" align="center" justify="center" w="100%" gap="32px">
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
      <Flex
        sx={{ ">div": { width: { base: "280px", md: "27%" } } }}
        alignSelf="stretch"
        mt="20px"
        gap="48px"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <>
          {WALLETS.map((wallet) => {
            return <WalletCard key={wallet.title} wallet={wallet} />;
          })}
        </>
      </Flex>
      <Button variant="outline" rounded="3xl" p="16px 24px">
        View More
        <ChevronDown />
      </Button>
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
    >
      <Flex
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="grey.800"
        h="64px"
        w="64px"
        align="center"
        justify="center"
        rounded="full"
        boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.32), 0px 0px 1px 0px rgba(40, 41, 61, 0.08)"
        borderWidth="2px"
        borderColor="green.500"
      >
        <Box position="relative" w="36px" h="36px">
          <Image src={wallet.imageSrc} fill alt="Metamask" />
        </Box>
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
