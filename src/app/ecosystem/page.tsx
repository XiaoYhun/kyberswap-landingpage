import { Box, Container, Flex, Spacer, Stack, Text, Button, Heading, Badge, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

const ECOSYSTEMS = [
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

export default function Ecosystem() {
  return (
    <>
      <Box position="absolute" top="0" left="0" right="0" zIndex={-1} width="100%" h="640px">
        <Image src="/assets/images/background.png" alt="bg" fill style={{ objectFit: "cover", opacity: "50%" }} />
      </Box>
      <Container>
        <Spacer h="100px" />
        <Flex align="center">
          <Flex flex={5} direction="column" gap="16px">
            <Text>Ecosystem</Text>
            <Heading size="2xl">KyberSwap Ecosystem</Heading>
            <Text color="whiteAlpha.600" fontWeight="normal">
              Explore the KyberSwap ecosystem of partners, integrations and stakeholders.
            </Text>
            <Text color="whiteAlpha.600" fontWeight="normal">
              We have a growing network of over 100 dApps building on top of our protocols to offer users superior rates
              and higher earnings!
            </Text>
            <Flex gap="24px" mt="16px">
              <Button
                variant="outline"
                p="16px 24px"
                rounded="2xl"
                as="a"
                href="https://forms.gle/ouU3WrwrxESfaVRe8"
                target="_blank"
              >
                Bussiness Enquiries
              </Button>
              <Button variant="outline" p="16px 24px" rounded="2xl">
                Docs
                <ArrowUpRight />
              </Button>
            </Flex>
          </Flex>
          <Box flex={4} w="480px" h="480px" position="relative">
            <Image src="/assets/images/ecosystem.gif" alt="kyber-ecosystem" fill style={{ objectFit: "cover" }} />
          </Box>
        </Flex>
        <Spacer h="100px" />
      </Container>
      <Box w="100%" minH="700px" bg="grey.900">
        <Container>
          <Flex
            w="100%"
            h="52px"
            p="8px"
            rounded="24px"
            bg="grey.800"
            transform={"translateY(-50%)"}
            boxShadow="0px 4px 28px 0px rgba(0, 0, 0, 0.16);"
            gap="12px"
          >
            <Box flex={3} bg="grey.900" border="1px solid" borderColor="greyAlpha.200" rounded="full"></Box>
            <Box flex={6} bg="grey.900" border="1px solid" borderColor="greyAlpha.200" rounded="full"></Box>
          </Flex>
        </Container>
        <Container p="36px 0">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="48px">
            {ECOSYSTEMS.map((wallet) => {
              return <WalletCard key={wallet.title} wallet={wallet} />;
            })}
          </SimpleGrid>
        </Container>
        <Spacer h="100px" />
      </Box>
    </>
  );
}

const WalletCard = ({ wallet }: { wallet: (typeof ECOSYSTEMS)[number] }) => {
  return (
    <Flex
      direction="column"
      align="center"
      rounded="3xl"
      borderWidth={1}
      borderColor="greyAlpha.200"
      position="relative"
      w="280px"
      role="group"
      _before={{
        content: "''",
        h: "60px",
        w: "60px",
        rounded: "full",
        transform: "translateY(-50%)",
        position: "absolute",
        bgColor: "#4670e5",
        transition: "all 0.5s ease",
        opacity: 0.6,
        zIndex: -1,
      }}
      _hover={{
        _before: { bgColor: "#e7640d", opacity: 1 },
      }}
      zIndex={1}
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
        zIndex={3}
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
              transform: "rotate(180deg)",
            },
          }}
        >
          <Box position="relative" w="36px" h="36px">
            <Image src={wallet.imageSrc} fill alt={wallet.title} />
          </Box>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        align="center"
        rounded="3xl"
        backdropFilter="blur(32px)"
        bg="greyAlpha.50"
        p="40px 24px 24px 24px"
        zIndex={2}
      >
        <Text mb="12px">{wallet.title}</Text>
        <Text fontSize="sm" color="whiteAlpha.600">
          {wallet.desc}
        </Text>
        <Badge variant="secondary" position="absolute" top="6px" right="8px">
          Wallet
        </Badge>
      </Flex>
    </Flex>
  );
};
