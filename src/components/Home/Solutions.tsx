"use client";
import { Box, Button, Card, CardBody, Flex, Heading, Stack, Text, useCallbackRef } from "@chakra-ui/react";
import { MotionBox } from "components/motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "react-feather";
import Slider from "./components/Slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { PanInfo, useAnimate } from "framer-motion";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
const FEATURES = [
  {
    imageUrl: "/assets/images/features/dex.png",
    title: "DEX Aggregator",
    desc: "Trade with excellent rates using our high performance, gas-efficient aggregator.",
    btns: [
      { type: "secondary", text: "Trade Now", href: "https://kyberswap.com/swap/ethereum", target: "_blank" },
      { type: "outline", text: "Learn More", href: "#" },
    ],
  },
  {
    imageUrl: "/assets/images/features/liquidity-protocols.png",
    title: "Liquidity Protocols",
    desc: "Earn more as a liquidity provider with real yield from capital efficient Elastic & Classic protocols.",
    btns: [
      { type: "secondary", text: "Add Liquidity", href: "https://kyberswap.com/pools/", target: "_blank" },
      { type: "outline", text: "Learn More", href: "#" },
    ],
  },
  {
    imageUrl: "/assets/images/features/kyberai.png",
    title: "KyberAI",
    desc: "Get alpha before it happens on 4000 tokens in real time, powered by our machine learning algorithm",
    btns: [
      { type: "secondary", text: "Get Started", href: "https://kyberswap.com/KyberAI/About", target: "_blank" },
      { type: "outline", text: "Learn More", href: "#" },
    ],
  },
  {
    imageUrl: "/assets/images/features/limit-order.png",
    title: "Limit Orders",
    desc: "Buy low, sell high, with gasless and slippage free limit orders",
    btns: [
      { type: "secondary", text: "Trade Now", href: "https://kyberswap.com/limit/ethereum", target: "_blank" },
      { type: "outline", text: "Learn More", href: "#" },
    ],
  },
  {
    imageUrl: "/assets/images/features/farming-rewards.png",
    title: "Farming Rewards",
    desc: "Enjoy boosted yields powered by KyberSwap & participating protocols",
    btns: [
      { type: "secondary", text: "Add Liquidity", href: "https://kyberswap.com/farms/ethereum", target: "_blank" },
    ],
  },
  {
    imageUrl: "/assets/images/features/cross-chain.png",
    title: "Cross-Chain Swaps",
    desc: "Bridge across chains fast, seamlessly on X chains",
    btns: [{ type: "secondary", text: "Trade Now", href: "https://kyberswap.com/cross-chain", target: "_blank" }],
  },
  {
    imageUrl: "/assets/images/features/onramp.png",
    title: "Onramp",
    desc: "Convert fiat to crypto immediately with card, Google or Apple Pay",
    btns: [{ type: "secondary", text: "Buy Crypto", href: "https://kyberswap.com/buy-crypto", target: "_blank" }],
  },
  {
    imageUrl: "/assets/images/features/campaigns.png",
    title: "Campaigns",
    desc: "Join exciting trading, onchain, referral and community campaigns for extra rewards",
    btns: [{ type: "secondary", text: "Join Now", href: "https://kyberswap.com/campaigns", target: "_blank" }],
  },
  {
    imageUrl: "/assets/images/features/gas-refund.png",
    title: "Gas Refunds",
    desc: "Stake KNC in KyberDAO and enjoy up to X% gas refund",
    btns: [
      { type: "secondary", text: "Stake Now", href: "https://kyberswap.com/kyberdao/knc-utility", target: "_blank" },
    ],
  },
];

export default function Solutions() {
  const gap = 24;
  const itemsInView = 3;
  const ref = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const [clientWidth, setClientWidth] = useState(0);
  const [step, setStep] = useState<number>(0);

  const nextStep = useCallback(
    (increase: number | undefined = 1) => {
      if (step + increase + itemsInView > FEATURES.length || step + increase < 0) {
        setStep(0);
        snapAnimate(0);
      } else {
        setStep(step + increase);
      }
    },
    [step]
  );

  const prevStep = () => {
    if (step - 1 <= 0) {
      setStep(0);
    } else {
      setStep(step - 1);
    }
  };

  const snapAnimate = (stepToSnap: number) => {
    animate(scope.current, { x: -stepToSnap * (clientWidth + gap) }, { type: "spring", damping: 40, stiffness: 200 });
  };

  useEffect(() => {
    if (!ref.current) return () => {};
    const observer = new ResizeObserver((entries) => {
      setClientWidth(entries[0].contentRect.width);
    });
    observer.observe(ref.current.children[0]);
    return () => ref.current && observer.unobserve(ref.current.children[0]);
  }, []);

  useEffect(() => {
    snapAnimate(step);
  }, [step]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextStep();
    }, 10_000);
    return () => {
      clearTimeout(timeout);
    };
  }, [nextStep]);

  const handleDragEnd = (e: PointerEvent, info: PanInfo) => {
    e.stopPropagation();
    const stepOffset =
      info.velocity.x > 80
        ? Math.ceil(info.offset.x / (clientWidth + gap))
        : Math.round(info.offset.x / (clientWidth + gap));
    if (stepOffset === 0) {
      snapAnimate(step);
    } else {
      nextStep(-stepOffset);
    }
  };

  return (
    <BoxInViewMotion>
      <Flex gap="48px" direction="column">
        <Flex justify="space-between" align="center">
          <Heading
            fontSize={{ base: "24px", md: "48px" }}
            textAlign={{ base: "center", md: "left" }}
            px={{ base: "12px", md: "0" }}
            className="inViewChild"
          >
            A Solution For Your Every Need
          </Heading>
          <Stack direction="row" display={{ base: "none", md: "flex" }} className="inViewChild">
            <Button variant="secondary" p="0.5rem" onClick={prevStep}>
              <ChevronLeft />
            </Button>
            <Button variant="secondary" p="0.5rem" onClick={() => nextStep()}>
              <ChevronRight />
            </Button>
          </Stack>
        </Flex>
        <Box width="100%" overflowX="hidden" className="inViewChild">
          <MotionBox ref={scope} drag="x" dragMomentum={false} onDragEnd={handleDragEnd}>
            <Flex
              ref={ref}
              gap={`${gap}px`}
              sx={{
                ">div": {
                  width: {
                    base: "360px",
                    md: `calc(100% / ${itemsInView} - ((${itemsInView - 1}) * ${gap}px / ${itemsInView}))`,
                  },
                  flexShrink: 0,
                },
              }}
            >
              {FEATURES.map((item, index) => {
                return <FeatureCard item={item} key={index} index={index} />;
              })}
            </Flex>
          </MotionBox>
          <Slider />
        </Box>
      </Flex>
    </BoxInViewMotion>
  );
}

const FeatureCard = ({ item, index }: { item: (typeof FEATURES)[number]; index: number }) => {
  return (
    <Card rounded="2xl" bg="whiteAlpha.100" color="white" id={`feature-card-${index}`} backdropFilter="blur(12px)">
      <CardBody>
        <Flex direction="column" height="100%">
          <Box
            w="calc(100% + 40px)"
            height="210px"
            position="relative"
            mt="-20px"
            ml="-20px"
            mr="-20px"
            userSelect="none"
          >
            <Image src={item.imageUrl} alt="Dex aggregator" fill style={{ objectFit: "cover" }} draggable={false} />
          </Box>
          <Stack mt="6" spacing="4" flex={1}>
            <Heading size="lg">{item.title}</Heading>
            <Text color="whiteAlpha.600" mb="1" flex={1} fontWeight="normal">
              {item.desc}
            </Text>
            <Flex direction="column" gap="4">
              <>
                {item.btns.map((btn, index) => {
                  return (
                    <Button
                      key={index}
                      variant={btn.type}
                      as="a"
                      href={btn.href ?? "#"}
                      target={btn.target ?? "_self"}
                      fontSize="lg"
                      p="10px 16px"
                      rounded="2xl"
                      w="fit-content"
                      sx={{ ":hover": { transform: "translateY(-2px)", boxShadow: "0 2px 3px 3px #00000015" } }}
                    >
                      {btn.text} <ArrowUpRight />
                    </Button>
                  );
                })}
              </>
            </Flex>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};
