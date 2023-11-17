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
  Center,
  Flex,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import DropdownIcon from "components/SVG/DropdownIcon";
import useQueryParams from "hooks/useQueryParams";
import Image from "next/image";
import { useMemo, useState } from "react";
export default function PartnersList() {
  const defaultItemCount = useBreakpointValue({ base: 6, sm: 12, md: 18 }) || 18;
  const { queryParams, setQueryParams } = useQueryParams<{ c?: string; s?: string }>();

  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState<number | undefined>();
  const selectedPartnerInfo = selectedPartnerIndex !== undefined && ECOSYSTEMS[selectedPartnerIndex];

  const categoryFilter = queryParams?.get("c") || "all";
  const searchFilter = queryParams?.get("s") || "";

  const updateSearchParam = (key: string, value: string) => {
    setQueryParams({ [key]: value });
  };

  const filteredPartners = useMemo(() => {
    return ECOSYSTEMS.filter((e) =>
      categoryFilter && categoryFilter !== "all" ? e.category === (+categoryFilter as CategoryType) : true
    ).filter((e) => e.title.toLowerCase().includes(searchFilter.toLowerCase()));
  }, [categoryFilter, searchFilter]);

  return (
    <>
      <Flex
        w="100%"
        h="52px"
        p="8px"
        rounded="24px"
        bg="grey.800"
        transform={"translateY(-50%)"}
        boxShadow="0px 4px 28px 0px rgba(0, 0, 0, 0.16);"
        gap="12px"
        zIndex={13}
        position="relative"
      >
        <Box flex={1} bg="grey.900" border="1px solid" borderColor="greyAlpha.200" rounded="full" zIndex={3}>
          <Menu preventOverflow arrowPadding={4} matchWidth>
            <MenuButton
              as={Button}
              variant="ghost"
              color="white"
              fontSize="14px"
              p="0 12px 0 40px"
              height="35px"
              rightIcon={<DropdownIcon size={16} />}
              w="100%"
              _hover={{
                bg: "grey.800",
              }}
              _active={{
                bg: "grey.700",
              }}
            >
              {CategoryFilters[categoryFilter]}
            </MenuButton>
            <MenuList border="none" bg="grey.800" boxShadow="2xl" rounded="2xl" zIndex={100} overflow="hidden">
              {Object.keys(CategoryFilters)
                .sort((a) => (a === "all" ? -1 : 1))
                .map((key: string) => {
                  const categoryName = CategoryFilters[key as unknown as CategoryType];
                  return (
                    <MenuItem
                      key={key}
                      minH="40px"
                      bg="grey.800"
                      fontSize="14px"
                      color="whiteAlpha.600"
                      px="16px"
                      _hover={{
                        bg: "grey.700",
                        color: "white",
                      }}
                      justifyContent="center"
                      onClick={() => updateSearchParam("c", key)}
                    >
                      <span>{categoryName}</span>
                    </MenuItem>
                  );
                })}
            </MenuList>
          </Menu>
        </Box>
        <Input
          flex={3}
          bg="grey.900"
          border="1px solid"
          borderColor="greyAlpha.200"
          rounded="full"
          h="36px"
          fontSize="14px"
          _hover={{ borderColor: "greyAlpha.400" }}
          _focusVisible={{ borderColor: "green.400" }}
          _active={{ borderColor: "green.400" }}
          onChange={(e) => {
            setQueryParams({ s: e.target.value });
          }}
        />
      </Flex>
      <Flex p="36px 0" direction="column" align="center" gap="24px">
        <SimpleGrid columns={[1, 1, 2, 3]} rowGap="48px" columnGap="30px">
          <>
            {filteredPartners.slice(0, defaultItemCount).map((item, index) => {
              return <ItemCard key={item.title} item={item} onClick={() => setSelectedPartnerIndex(index)} />;
            })}
          </>
        </SimpleGrid>
        {filteredPartners.length > defaultItemCount && (
          <Accordion mt="-12px" allowToggle className="inViewChild" transitionDuration="2s">
            <AccordionItem border="none" overflow="visible">
              {({ isExpanded }) => (
                <>
                  <AccordionPanel p="36px 0 0 0">
                    <SimpleGrid columns={[1, 1, 2, 3]} rowGap="48px" columnGap="30px">
                      <>
                        {filteredPartners.slice(defaultItemCount, filteredPartners.length).map((wallet, index) => {
                          return (
                            <ItemCard
                              key={wallet.title}
                              item={wallet}
                              onClick={() => setSelectedPartnerIndex(index + defaultItemCount)}
                            />
                          );
                        })}
                      </>
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
        )}
        {filteredPartners.length === 0 && (
          <Center>
            <Text color="whiteAlpha.600">Not found.</Text>
          </Center>
        )}
        <Modal isOpen={!!selectedPartnerInfo} onClose={() => setSelectedPartnerIndex(undefined)} isCentered>
          <ModalOverlay />
          <ModalContent bg="transparent" boxShadow="none" transition="none">
            <ModalBody>{selectedPartnerInfo && <ItemCard item={selectedPartnerInfo} inModal />}</ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

enum CategoryType {
  Blockchain,
  CrossChain,
  InfraSecurity,
  LiquidStaking,
  NFTGamefi,
  Payment,
  PortManage,
  Wallet,
  YieldProtocol,
}

const Categories: Record<CategoryType, { name: string; color: string }> = {
  [CategoryType.Blockchain]: { name: "Blockchain", color: "#31CB9E" },
  [CategoryType.CrossChain]: { name: "Cross-chain", color: "#888888" },
  [CategoryType.InfraSecurity]: { name: "Infra/Security", color: "#a51d93" },
  [CategoryType.LiquidStaking]: { name: "Liquid Staking", color: "#a85b3c" },
  [CategoryType.NFTGamefi]: { name: "NFT/Gamefi", color: "#a51d93" },
  [CategoryType.PortManage]: { name: "Portfolio/Analytics", color: "#c53e3e" },
  [CategoryType.Payment]: { name: "Payment", color: "#a74b35" },
  [CategoryType.Wallet]: { name: "Wallet", color: "#31CB9E" },
  [CategoryType.YieldProtocol]: { name: "Yield Protocol", color: "#4375ff" },
};

const CategoryFilters = {
  all: "All Partners",
  ...Object.keys(Categories).reduce((acc: any, curr: any) => {
    acc[curr] = Categories[curr as CategoryType].name;
    return acc;
  }, {}),
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
    imageSrc: "/assets/images/ecosystem/chain-security.jpeg",
    title: "Chain Security",
    desc: "",
    url: "https://chainsecurity.com/",
    category: CategoryType.InfraSecurity,
  },
  {
    imageSrc: "/assets/images/ecosystem/sipher.svg",
    title: "Sipher",
    desc: "",
    url: "https://playsipher.com/",
    category: CategoryType.NFTGamefi,
  },
  {
    imageSrc: "/assets/images/ecosystem/debank.svg",
    title: "Debank",
    desc: "",
    url: "https://www.debank.com/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/images/ecosystem/alexar.png",
    title: "Axelar",
    desc: "Axelar is the universal overlay network, securely connecting all blockchain ecosystems, applications, assets, and users to deliver Web3 interoperability.",
    url: "https://www.alexar.network/",
    category: CategoryType.CrossChain,
  },
  {
    imageSrc: "/assets/images/ecosystem/transak.svg",
    title: "Transak",
    desc: "",
    url: "https://www.transak.com/",
    category: CategoryType.Payment,
  },
  {
    imageSrc: "/assets/images/ecosystem/debank.svg",
    title: "Defillama",
    desc: "DefiLlama is a prominent platform that provides comprehensive data and information about various aspects of the decentralized finance (DeFi) ecosystem",
    url: "https://www.defillama.com/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/images/ecosystem/debank.svg",
    title: "Defisaver",
    desc: "DeFi Saver is an all-in-one asset management application for decentralized finance (DeFi) protocols. It provides users with non-custodial, trustless access to various DeFi platforms",
    url: "https://www.defisaver.com/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/images/ecosystem/debank.svg",
    title: "Instadapp",
    desc: "Instadapp is a platform that simplifies and enhances the use of decentralized finance (DeFi). It offers a suite of tools and services designed to provide users with a seamless and efficient DeFi experience.",
    url: "https://www.instadapp.io/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/images/ecosystem/debank.svg",
    title: "Dextools",
    desc: "DEXTools is a decentralized finance (DeFi) tool that provides a comprehensive set of trading tools for users of decentralized exchanges (DEXs)",
    url: "https://www.dextools.io/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/images/ecosystem/debank.svg",
    title: "Dexscreener",
    desc: "DEXScreener is a powerful platform that allows traders and investors to track and analyze real-time data from multiple decentralized ",
    url: "https://www.dexscreener.com/",
    category: CategoryType.PortManage,
  },
  {
    imageSrc: "/assets/images/ecosystem/debank.svg",
    title: "Swell",
    desc: "Swell Network is a blockchain-based platform that offers non-custodial staking solutions for cryptocurrency, with a focus on Ethereum. It provides users with the opportunity to stake their Ethereum (ETH) holdings in a liquid or unlocked manner and earn financial rewards.",
    url: "https://www.swell.io/",
    category: CategoryType.LiquidStaking,
  },
];

const ItemCard = ({
  item,
  inModal,
  onClick,
}: {
  item: (typeof ECOSYSTEMS)[number];
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
            <Image src={item.imageSrc} fill alt={item.title} />
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
        <Text>{item.title}</Text>
        {inModal && item.url && (
          <Link fontSize="14px" href={item.url} target="_blank">
            {item.url}
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
          {item.desc}
        </Text>
        <Badge
          variant="secondary"
          position="absolute"
          top="6px"
          right="8px"
          color={Categories[item.category].color}
          bg={Categories[item.category].color + "32"}
        >
          {Categories[item.category].name}
        </Badge>
      </Flex>
    </Flex>
  );
};
