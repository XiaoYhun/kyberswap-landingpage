import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import CardFeature from "components/Shared/CardFeature";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

const FEATURES = [
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "KyberScore",
    desc: "Get the decision-making edge with live bullish & bearish scores on 4000+ tokens in crypto. Sign-up now.",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Token Rankings",
    desc: "Explore top tokens in KyberAI&apos;s Rankings: Uncover Bullish to Bearish trends. Learn more today.",
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
            <CardFeature {...item} key={index} className="inViewChild" />
          ))}
        </SimpleGrid>
      </Container>
    </BoxInViewMotion>
  );
}
