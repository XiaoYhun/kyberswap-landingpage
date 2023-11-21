"use client";
import { Box, Button, Center, Container, Flex, Heading, SimpleGrid, Text, chakra, useTheme } from "@chakra-ui/react";
import BoxWithGradientBorder from "components/Shared/BoxWithGradientBorder";
import { MotionBox } from "components/motion";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import bigTableImage from "assets/images/table-big-1.png";
const ELASTIC_FEATURES = [
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Optimized Yields",
    desc: "Adjust price ranges strategically and earn more.",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "More Rewards",
    desc: "Stake your liquidity to get more rewards from KyberSwap or our partners.",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Auto-compounding",
    desc: "Grow your assets automatically without extra steps and fees.",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Extra Protection",
    desc: "Safeguard your liquidity against front-runners with our native Anti-Sniping feature.",
  },
];
const CLASSIC_FEATURES = [
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Multiply Your Returns",
    desc: "Amplify your capital efficiency by customizing price curves to support trades within narrower ranges.",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Get More When Markets Are Volatile",
    desc: "Protect your funds from impermanent loss with fees that automatically adjusts according to the market.",
  },
];

enum Tab {
  Elastic = "Elastic",
  Classic = "Classic",
}

export default function Pools() {
  const theme = useTheme();
  const [tab, setTab] = useState(Tab.Elastic);
  return (
    <BoxInViewMotion>
      <Container position="relative">
        <Flex direction="column" gap="24px" height="100%">
          <Flex gap="12px" position="absolute" right="0" zIndex={10} className="inViewChild">
            <Button variant="secondary" p="0.5rem" onClick={() => setTab(Tab.Elastic)}>
              <ChevronLeft />
            </Button>
            <Button variant="secondary" p="0.5rem" onClick={() => setTab(Tab.Classic)}>
              <ChevronRight />
            </Button>
          </Flex>
          <Heading size="2xl" className="inViewChild">
            KyberSwap{" "}
            <MotionConfig transition={{ duration: 0.15 }}>
              <AnimatePresence mode="wait">
                {tab === Tab.Elastic ? (
                  <TransformText key="Elastic" text="Elastic" />
                ) : (
                  <TransformText key="Classic" text="Classic" />
                )}
              </AnimatePresence>
            </MotionConfig>
          </Heading>
          <Flex height="460px" direction="column" className="inViewChild">
            <MotionConfig transition={{ duration: 0.15 }}>
              <AnimatePresence mode="wait">
                {tab === Tab.Elastic ? (
                  <MotionBox
                    key="elastic"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -30, opacity: 0 }}
                    flex={1}
                  >
                    <Flex direction="column" gap="16px">
                      <Text textStyle="sub">
                        Your new favorite Concentrated Liquidity Market Maker protocol with optimized yield,
                        auto-compounding, more rewards, and extra protection.
                      </Text>
                      <ButtonWithAnimatedArrowUpRight
                        size="lg"
                        variant="outline"
                        as="a"
                        href="https://docs.kyberswap.com/liquidity-solutions/kyberswap-elastic"
                        target="_blank"
                      >
                        Learn More
                      </ButtonWithAnimatedArrowUpRight>
                      <SimpleGrid columns={2} gap="32px" mt="24px" zIndex={1}>
                        {ELASTIC_FEATURES.map((item, index) => (
                          <CardFeature {...item} key={index} />
                        ))}
                      </SimpleGrid>
                    </Flex>
                  </MotionBox>
                ) : (
                  <MotionBox
                    key="classic"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 30, opacity: 0 }}
                    flex={1}
                  >
                    <Flex direction="column" gap="16px">
                      <Text textStyle="sub">
                        AMM protocol with capital efficient pools and auto-adjusting trading fees.
                      </Text>
                      <ButtonWithAnimatedArrowUpRight
                        size="lg"
                        variant="outline"
                        as="a"
                        href="https://docs.kyberswap.com/liquidity-solutions/kyberswap-classic"
                        target="_blank"
                      >
                        Learn More
                      </ButtonWithAnimatedArrowUpRight>
                      <SimpleGrid columns={2} gap="32px" mt="24px" zIndex={1}>
                        {CLASSIC_FEATURES.map((item, index) => (
                          <CardFeature {...item} key={index} />
                        ))}
                      </SimpleGrid>
                    </Flex>
                  </MotionBox>
                )}
              </AnimatePresence>
            </MotionConfig>
            <Flex justify="center" gap="12px">
              <Dot
                bg={tab === Tab.Elastic ? theme.colors.green[400] : theme.colors.grey[400]}
                onClick={() => setTab(Tab.Elastic)}
              />
              <Dot
                bg={tab === Tab.Classic ? theme.colors.green[400] : theme.colors.grey[400]}
                onClick={() => setTab(Tab.Classic)}
              />
            </Flex>
          </Flex>
          <Box fontSize="24px" className="inViewChild">
            Top{" "}
            <Text as="span" color="green.400">
              Pools
            </Text>
          </Box>
          <Image src={bigTableImage} alt="top pools" className="inViewChild" />
          <ButtonWithAnimatedArrowUpRight
            size="lg"
            variant="secondary"
            as="a"
            href="https://kyberswap.com/pools/ethereum?tab=elastic"
            target="_blank"
            className="inViewChild"
          >
            View All Pools
          </ButtonWithAnimatedArrowUpRight>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}

const CardFeature = ({ logoSrc, title, desc }: { logoSrc: string; title: string; desc: string }) => {
  return (
    <BoxWithGradientBorder
      rounded="3xl"
      h="105px"
      w="full"
      backgroundImage="url(/assets/images/background.png)"
      backgroundPosition="center"
      backgroundSize="cover"
      borderGradient="linear-gradient(to left top, #6EE7C380, #6ed5e780)"
      boxShadow="0px 16px 24px 0px rgba(0, 0, 0, 0.32), 0px -2px 8px 0px rgba(0, 0, 0, 0.04)"
      position="relative"
      transition="0.5s ease"
      transitionProperty="perspective, transform"
      userSelect="none"
    >
      <Box
        position="absolute"
        inset="0 0 0 56px"
        bg="blackAlpha.800"
        rounded="inherit"
        margin="-1px"
        border="0.3px solid rgba(98, 116, 110, 0.1)"
        backdropFilter="blur(2px)"
        p="24px 12px 24px 48px"
        transform="translate3d(0, 0, 15px)"
      >
        <Flex direction="column" h="full" justify="center" gap="8px">
          <Text fontSize="20px">{title}</Text>
          <Text textStyle="sub" fontSize="14px" lineHeight="tall">
            {desc}
          </Text>
        </Flex>
      </Box>
      <Box position="absolute" top="50%" transform="translate3d(24px,-50%, 30px)">
        <BoxWithGradientBorder
          w="64px"
          h="64px"
          p="12px"
          borderSize={2}
          bg="grey.800"
          rounded="full"
          boxShadow="0px 3px 6px 2px rgba(0, 0, 0, 0.32), 0px 3px 5px 0px rgba(40, 41, 61, 0.08)"
        >
          <Image src={logoSrc} alt="feature" height={40} width={40} />
        </BoxWithGradientBorder>
      </Box>
    </BoxWithGradientBorder>
  );
};

const TransformText = ({ text }: { text: string }) => {
  return (
    <Flex
      as={motion.div}
      overflow="hidden"
      color="green.400"
      sx={{
        display: "inline-flex",
        span: { display: "block", width: "fit-content", whiteSpace: "nowrap" },
        whiteSpace: "nowrap",
      }}
      exit={{ opacity: 0 }}
    >
      {text.split("").map((c, index) => {
        const isOdd = index % 2 === 1;
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: isOdd ? -30 : 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 1000, damping: 45, mass: 1, delay: 0.03 * index }}
          >
            {c}
          </motion.span>
        );
      })}
    </Flex>
  );
};

const Dot = chakra(Box, {
  baseStyle: {
    w: "10px",
    h: "10px",
    rounded: "full",
    cursor: "pointer",
    transition: "all 0.2s ease",
    _hover: {
      filter: "brightness(1.2)",
    },
  },
});
