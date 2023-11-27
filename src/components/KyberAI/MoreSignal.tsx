import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import FeatureCard from "components/Shared/FeatureCard";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Link from "next/link";

const FEATURES = [
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "KyberScore",
    desc: (
      <>
        Get the decision-making edge with live bullish & bearish scores on 4000+ tokens in crypto.{" "}
        <Text as="a" color="green.400" href="https://kyberswap.com/KyberAI/About" target="_blank">
          Sign-up
        </Text>{" "}
        now.
      </>
    ),
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Token Rankings",
    desc: (
      <>
        Explore top tokens in KyberAI&apos;s Rankings: Uncover Bullish to Bearish trends.{" "}
        <Text
          as="a"
          href="https://docs.kyberswap.com/kyberswap-solutions/kyberai/user-guides/discover-promising-tokens"
          target="_blank"
          color="green.400"
        >
          Learn more
        </Text>{" "}
        today.
      </>
    ),
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Explore",
    desc: "Discover new tokens. Harness KyberAI's on-chain insights for timely decisions. Dive in now!",
  },
];

export default function MoreSignal() {
  return (
    <BoxInViewMotion>
      <Container>
        <Heading size="2xl" mb="80px" className="inViewChild">
          More signals, less noise, at your fingertips
        </Heading>
        <SimpleGrid columns={3} gap="32px" zIndex={1} className="inViewChild">
          {FEATURES.map((item, index) => (
            <FeatureCard {...item} key={index} className="inViewChild" />
          ))}
        </SimpleGrid>
      </Container>
    </BoxInViewMotion>
  );
}
