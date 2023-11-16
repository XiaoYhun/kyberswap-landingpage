"use client";

import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Button,
  Heading,
  Badge,
  SimpleGrid,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Modal,
  ModalContent,
  ModalBody,
  ModalOverlay,
  Link,
} from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import SpinningEcosystem from "components/motion/SpinningEcosystem";
import Image from "next/image";
import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
enum CategoryType {
  Blockchain,
  LiquidStaking,
  YieldProtocol,
  Wallet,
  InfraSecurity,
  NFTGamefi,
  PortManage,
  CrossChain,
  Payment,
}

const Categories: Record<CategoryType, { name: string; color: string }> = {
  [CategoryType.Blockchain]: { name: "Blockchain", color: "#31CB9E" },
  [CategoryType.LiquidStaking]: { name: "Liquid Staking", color: "#a85b3c" },
  [CategoryType.YieldProtocol]: { name: "Yield Protocol", color: "#4375ff" },
  [CategoryType.Wallet]: { name: "Wallet", color: "#31CB9E" },
  [CategoryType.InfraSecurity]: { name: "Infrastructure/Security", color: "#a51d93" },
  [CategoryType.NFTGamefi]: { name: "NFT/Gamefi", color: "#a51d93" },
  [CategoryType.PortManage]: { name: "Portfolio/Analytics", color: "#c53e3e" },
  [CategoryType.CrossChain]: { name: "Cross-chain", color: "#888888" },
  [CategoryType.Payment]: { name: "Payment", color: "#a74b35" },
};

const ECOSYSTEMS = [
  {
    imageSrc: "/assets/svg/wallets/metamask.svg",
    title: "Metamask",
    desc: "MetaMask is a non-custodial cryptocurrency wallet that enables users to access the Web 3 ecosystem of decentralized applications (dapps)",
    url: "https://www.metamask.io/",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/rabby.svg",
    title: "Rabby",
    desc: "Rabby Wallet is an open-source browser extension acting as a crypto wallet for Ethereum and all EVM chains, designed particularly for DeFi users",
    url: "https://www.rabby.io/",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/trustwallet.svg",
    title: "Trust Wallet",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
    url: "",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/blocto.svg",
    title: "Blocto",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
    url: "",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/krystal.svg",
    title: "Krystal",
    desc: "Krystal DeFi is a multi-chain platform that provides easy access to popular decentralized finance (DeFi) services and allows users to manage non-fungible tokens (NFTs). It offers a comprehensive suite of transactional services, including sending, swapping, bridging, and earning on a single platform",
    url: "https://www.krystal.app/",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/wallet-connect.svg",
    title: "WalletConnect",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
    url: "",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/brave.svg",
    title: "Brave Wallet",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
    url: "",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/safe.svg",
    title: "Safe",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
    url: "",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/coinbase.svg",
    title: "Coinbase",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
    url: "",
    category: CategoryType.Wallet,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Coin98",
    desc: "A crypto wallet and gateway to blockchain apps. A crypto wa...",
    url: "",
    category: CategoryType.Wallet,
  },
  {
    imageSrc:
      "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
    title: "Ethereum",
    desc: "",
    url: "https://ethereum.org/en/",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc:
      "https://storage.googleapis.com/ks-setting-1d682dca/369ad098-9f91-4827-92f9-ba18ece467dd1699540645337.png",
    title: "Polygon Pos",
    desc: "",
    url: "https://polygon.technology/",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc:
      "https://storage.googleapis.com/ks-setting-1d682dca/815d1f9c-86b2-4515-8bb1-4212106321c01699420293856.png",
    title: "Polygon zkEVM",
    desc: "",
    url: "https://polygon.technology/polygon-zkevm",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc: "https://storage.googleapis.com/ks-setting-1d682dca/e123a120-6556-4a72-83c8-af4cce475e43.png",
    title: "Arbitrum",
    desc: "",
    url: "https://arbitrum.io/",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc:
      "https://storage.googleapis.com/ks-setting-1d682dca/2591cd26-53e5-4b0b-85d7-2d11d9820e461697032004529.png",
    title: "Optimism",
    desc: "",
    url: "https://www.optimism.io/",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc:
      "https://storage.googleapis.com/ks-setting-1d682dca/bd00114e-d4a5-4ccd-a80b-e9a1f29b1bc11697613637225.png",
    title: "Scroll",
    desc: "",
    url: "https://www.scroll.io/",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc:
      "https://storage.googleapis.com/ks-setting-1d682dca/14c1b7c4-b66e-4169-b82e-ea6237f15b461699420601184.png",
    title: "Binance",
    desc: "",
    url: "https://www.binance.org/en/smartChain",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc:
      "https://storage.googleapis.com/ks-setting-1d682dca/851db113-574a-4efd-8579-79ac986d97e81699540896820.png",
    title: "Avalanche",
    desc: "",
    url: "https://www.avax.network/",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc:
      "https://storage.googleapis.com/ks-setting-1d682dca/bd11850b-6aef-48c6-a27d-f8ee833e0dbc1693378187666.svg",
    title: "ZkSync Era",
    desc: "",
    url: "https://zksync.io/",
    category: CategoryType.Blockchain,
  },
  {
    imageSrc: "/assets/images/ecosystem/lido.svg",
    title: "Lido",
    desc: "Lido is a liquid staking solution for Ethereum. Lido lets users stake their ETH - with no minimum deposits or maintenance of infrastructure - whilst participating in on-chain activities, e.g. lending, to compound returns.",
    url: "https://lido.fi/",
    category: CategoryType.LiquidStaking,
  },
  {
    imageSrc: "/assets/images/ecosystem/pendle.png",
    title: "Pendle",
    desc: "Pendle is a yield management protocol that lets users get more from yield-bearing assets by separating them into different parts and letting users speculate on the changes in the underlying yield.",
    url: "https://www.pendle.finance/",
    category: CategoryType.YieldProtocol,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "ChainSecurity",
    desc: "",
    url: "https://chainsecurity.com/",
    category: CategoryType.InfraSecurity,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Sipher",
    desc: "",
    url: "https://playsipher.com/",
    category: CategoryType.NFTGamefi,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Debank",
    desc: "",
    url: "https://www.debank.com/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Axelar",
    desc: "Axelar is the universal overlay network, securely connecting all blockchain ecosystems, applications, assets, and users to deliver Web3 interoperability.",
    url: "https://www.alexa.network/",
    category: CategoryType.CrossChain,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Transak",
    desc: "",
    url: "https://www.transak.com/",
    category: CategoryType.Payment,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Defillama",
    desc: "DefiLlama is a prominent platform that provides comprehensive data and information about various aspects of the decentralized finance (DeFi) ecosystem",
    url: "https://www.defillama.com/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Defisaver",
    desc: "DeFi Saver is an all-in-one asset management application for decentralized finance (DeFi) protocols. It provides users with non-custodial, trustless access to various DeFi platforms",
    url: "https://www.defisaver.com/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Instadapp",
    desc: "Instadapp is a platform that simplifies and enhances the use of decentralized finance (DeFi). It offers a suite of tools and services designed to provide users with a seamless and efficient DeFi experience.",
    url: "https://www.instadapp.io/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Dextools",
    desc: "DEXTools is a decentralized finance (DeFi) tool that provides a comprehensive set of trading tools for users of decentralized exchanges (DEXs)",
    url: "https://www.dextools.io/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Dexscreener",
    desc: "DEXScreener is a powerful platform that allows traders and investors to track and analyze real-time data from multiple decentralized ",
    url: "https://www.dexscreener.com/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    title: "Swell",
    desc: "Swell Network is a blockchain-based platform that offers non-custodial staking solutions for cryptocurrency, with a focus on Ethereum. It provides users with the opportunity to stake their Ethereum (ETH) holdings in a liquid or unlocked manner and earn financial rewards.",
    url: "https://www.swell.io/",
    category: CategoryType.LiquidStaking,
  },
];

export default function Test3D() {
  const defaultItemCount = useBreakpointValue([6, 12, 18], { ssr: false });
  console.log("🚀 ~ file: page.tsx:293 ~ Test3D ~ defaultItemCount:", defaultItemCount);

  const [openModal, setOpenModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<(typeof ECOSYSTEMS)[number]>();
  return (
    <>
      <Box position="absolute" top="0" left="0" right="0" zIndex={0} width="100%" h="640px" bg="#090909">
        {/* <Image src="/assets/images/background.png" alt="bg" fill style={{ objectFit: "cover", opacity: "50%" }} /> */}
        <SpinningEcosystem />
      </Box>

      <BoxInViewMotion>
        <Container>
          <Spacer h="100px" />
          <Flex align="center">
            <Flex flex={5} direction="column" gap="16px">
              <Text className="inViewChild">Ecosystem</Text>
              <Heading size="2xl" className="inViewChild">
                KyberSwap Ecosystem
              </Heading>
              <Text color="whiteAlpha.600" fontWeight="normal" className="inViewChild">
                Explore the KyberSwap ecosystem of partners, integrations and stakeholders.
              </Text>
              <Text color="whiteAlpha.600" fontWeight="normal" className="inViewChild">
                We have a growing network of over 100 dApps building on top of our protocols to offer users superior
                rates and higher earnings!
              </Text>
              <Flex gap="24px" mt="16px">
                <Button
                  variant="outline"
                  p="16px 24px"
                  rounded="2xl"
                  as="a"
                  href="https://forms.gle/ouU3WrwrxESfaVRe8"
                  target="_blank"
                  className="inViewChild"
                >
                  Bussiness Enquiries
                </Button>
                <ButtonWithAnimatedArrowUpRight variant="outline" p="16px 24px" rounded="2xl" className="inViewChild">
                  Docs
                </ButtonWithAnimatedArrowUpRight>
              </Flex>
            </Flex>
            <Box flex={4} w="480px" h="440px" position="relative" className="inViewChild" pointerEvents="none">
              {/* <Image src="/assets/images/ecosystem.gif" alt="kyber-ecosystem" fill style={{ objectFit: "cover" }} /> */}
            </Box>
          </Flex>
          <Spacer h="100px" />
        </Container>
      </BoxInViewMotion>
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
        <Container p="36px 0" display="flex" flexDirection="column" alignItems="center" gap="24px">
          <LayoutGroup>
            <SimpleGrid columns={[1, 1, 2, 3]} rowGap="48px" columnGap="30px">
              {ECOSYSTEMS.slice(0, defaultItemCount).map((wallet) => {
                return (
                  <WalletCard
                    key={wallet.title}
                    wallet={wallet}
                    onClick={() => {
                      setOpenModal(true);
                      setSelectedWallet(wallet);
                    }}
                  />
                );
              })}
            </SimpleGrid>
            <Accordion mt="-12px" allowToggle className="inViewChild" transitionDuration="2s">
              <AccordionItem border="none" overflow="visible">
                {({ isExpanded }) => (
                  <>
                    <AccordionPanel p="36px 0 0 0">
                      <SimpleGrid columns={[1, 1, 2, 3]} rowGap="48px" columnGap="30px">
                        {ECOSYSTEMS.slice(defaultItemCount, ECOSYSTEMS.length).map((wallet) => {
                          return (
                            <WalletCard
                              key={wallet.title}
                              wallet={wallet}
                              onClick={() => {
                                setOpenModal(true);
                                setSelectedWallet(wallet);
                              }}
                            />
                          );
                        })}
                      </SimpleGrid>
                    </AccordionPanel>
                    <AccordionButton border="none" as="div" display="flex" justifyContent="center" mt="12px">
                      <Button variant="outline" rounded="3xl" p="16px 24px">
                        {isExpanded ? "Show Less" : "View More"}
                        <AccordionIcon />
                      </Button>
                    </AccordionButton>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} isCentered>
              <ModalOverlay />
              <ModalContent bg="transparent" boxShadow="none" transition="none">
                <ModalBody>{selectedWallet && <WalletCard wallet={selectedWallet} inModal />}</ModalBody>
              </ModalContent>
            </Modal>
          </LayoutGroup>
        </Container>
        <Spacer h="100px" />
      </Box>
    </>
  );
}

const WalletCard = ({
  wallet,
  inModal,
  onClick,
}: {
  wallet: (typeof ECOSYSTEMS)[number];
  inModal?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      rounded="3xl"
      borderWidth={1}
      borderColor="greyAlpha.200"
      position="relative"
      w={inModal ? "100%" : "320px"}
      role="group"
      cursor="pointer"
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
      onClick={() => onClick?.()}
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
        backdropFilter={"blur(32px)"}
        bg="greyAlpha.50"
        p="40px 24px 24px 24px"
        zIndex={2}
        w="100%"
        h="100%"
        minH="140px"
        transition="0.2s all ease"
        gap="12px"
      >
        <Text>{wallet.title}</Text>
        {inModal && wallet.url && (
          <Link href={wallet.url} target="_blank">
            {wallet.url}
          </Link>
        )}
        <Text
          fontSize="13px"
          color="whiteAlpha.600"
          fontWeight="normal"
          textOverflow="ellipsis"
          sx={
            inModal
              ? {}
              : {
                  display: "-webkit-box",
                  overflow: "hidden",
                  "-webkit-line-clamp": "2",
                  "-webkit-box-orient": "vertical",
                }
          }
        >
          {wallet.desc}
        </Text>
        <Badge
          variant="secondary"
          position="absolute"
          top="6px"
          right="8px"
          color={Categories[wallet.category].color}
          bg={Categories[wallet.category].color + "32"}
        >
          {Categories[wallet.category].name}
        </Badge>
      </Flex>
    </Flex>
  );
};
