import { Center, Container, Flex, Heading, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import Image from "next/image";

const SOURCES = [
  { src: "/assets/svg/liquidity-source/uniswap.svg", name: "Uniswap" },
  { src: "/assets/svg/liquidity-source/sushi-swap.svg", name: "Sushi swap" },
  { src: "/assets/svg/liquidity-source/pancake.svg", name: "Pancake swap" },
  { src: "/assets/svg/liquidity-source/1inch.svg", name: "1inch" },
  { src: "/assets/svg/liquidity-source/curve.svg", name: "Curve" },
  { src: "/assets/svg/liquidity-source/balancer.svg", name: "Balancer" },
  { src: "/assets/svg/liquidity-source/aave.svg", name: "Aave" },
  { src: "/assets/svg/liquidity-source/yearn.svg", name: "Yearn" },
  { src: "/assets/svg/liquidity-source/compound.svg", name: "Compound" },
  { src: "/assets/svg/liquidity-source/apeswap.svg", name: "Apeswap" },
  { src: "/assets/svg/liquidity-source/mkr.svg", name: "MKR" },
  { src: "/assets/svg/liquidity-source/krystal.svg", name: "Krystal" },
  { src: "/assets/svg/liquidity-source/bttc.svg", name: "BTTC" },
  { src: "/assets/svg/liquidity-source/debank.svg", name: "Debank" },
  { src: "/assets/svg/liquidity-source/quickswap.svg", name: "Quickswap" },
  { src: "/assets/svg/liquidity-source/snx.svg", name: "SNX" },
];

export default function LiquiditySources() {
  return (
    <BoxInViewMotion stagger={0.1}>
      <Container>
        <Flex direction="column" align="center" gap="32px">
          <Heading size="2xl" className="inViewChild">
            Integrated Liquidity Sources
          </Heading>
          <Text textStyle="sub" maxW="460px" textAlign="center" className="inViewChild">
            Access the deepest liquidity for trading in defi with 100+ liquidity sources across multiple chains.
          </Text>
        </Flex>
        <Spacer height="80px" />
        <SimpleGrid columns={8} rowGap="16px" columnGap="8px" mb="40px">
          <>
            {SOURCES.map((item) => (
              <Item {...item} key={item.name} />
            ))}
          </>
        </SimpleGrid>
        <Center>
          <ButtonWithAnimatedArrowUpRight
            variant="outline"
            as="a"
            href="https://docs.kyberswap.com/getting-started/supported-exchanges-and-networks"
            size="lg"
            className="inViewChild"
          >
            View More
          </ButtonWithAnimatedArrowUpRight>
        </Center>
      </Container>
    </BoxInViewMotion>
  );
}

const Item = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align="center" justify="center" direction="column" gap="8px" className="inViewChild">
      <Image src={src} width={48} height={48} alt={name} />
      <Text textStyle="sub">{name}</Text>
    </Flex>
  );
};
