import { Box, Button, Card, CardBody, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { MotionBox } from "components/motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "react-feather";
import Slider from "./components/Slider";
import { HighlightGroup, HighlighterItem } from "components/motion/Highlighter";
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
  // const [step, setStep] = useState(FEATURES.length);
  // const itemWidth = document?.getElementById("feature-card-0")?.clientWidth || 0;
  const gap = 24;
  // const animationControls = useAnimationControls();

  // useEffect(() => {
  //   animationControls.start({ x: step * (itemWidth + gap) * -1 }).then(() => {
  //     if (step === 0 || step === 2 * FEATURES.length) {
  //       setStep(FEATURES.length);
  //       animationControls.set({ x: FEATURES.length * (itemWidth + gap) * -1 });
  //     }
  //   });
  // }, [step, itemWidth]);
  return (
    <Flex gap="48px" direction="column">
      <Flex justify="space-between" align="center">
        <Heading
          fontSize={{ base: "24px", md: "48px" }}
          textAlign={{ base: "center", md: "left" }}
          px={{ base: "12px", md: "0" }}
        >
          A Solution For Your Every Need
        </Heading>
        <Stack direction="row" display={{ base: "none", md: "flex" }}>
          <Button variant="secondary" p="0.5rem">
            <ChevronLeft />
          </Button>
          <Button variant="secondary" p="0.5rem">
            <ChevronRight />
          </Button>
        </Stack>
      </Flex>
      <Box width="100%" overflowX="hidden">
        <MotionBox drag="x" dragSnapToOrigin>
          <HighlightGroup
            display="flex"
            gap={`${gap}px`}
            sx={{ ">div": { width: { base: "90%", md: `calc(33.33% - (2 * ${gap}px / 3))` }, flexShrink: 0 } }}
          >
            {FEATURES.map((item, index) => {
              return <FeatureCard item={item} key={index} index={index} />;
            })}
          </HighlightGroup>
        </MotionBox>
        <Slider />
      </Box>
    </Flex>
  );
}

const FeatureCard = ({ item, index }: { item: (typeof FEATURES)[number]; index: number }) => {
  return (
    <HighlighterItem opacity={0.6}>
      <Card rounded="2xl" bg="whiteAlpha.100" color="white" id={`feature-card-${index}`}>
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
              <Text color="whiteAlpha.600" mb="1" flex={1}>
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
                        _hover={{ transform: "translateY(-2px)", boxShadow: "0 2px 3px 3px #00000015" }}
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
    </HighlighterItem>
  );
};
