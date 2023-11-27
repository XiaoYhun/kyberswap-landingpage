import { Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";
import farmsTable from "assets/images/table-big-2.png";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import FeatureCard from "components/Shared/FeatureCard";
const FEATURES = [
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Static Farms",
    desc: "Get rewarded for supporting specific price range.",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Dynamic Farms",
    desc: "Get rewarded for supporting the market price.",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Classic Farms",
    desc: "Get rewarded by staking your liquidity.",
  },
];

export default function Farms() {
  return (
    <BoxInViewMotion>
      <Container>
        <Flex direction="column" gap="32px">
          <Flex direction="column" align="center" gap="24px">
            <Heading size="2xl" className="inViewChild">
              Get More Rewards with{" "}
              <Text as="span" color="green.400">
                Farms
              </Text>
            </Heading>
            <Text textStyle="sub" className="inViewChild">
              Earn additional rewards by staking your liquidity.
            </Text>
          </Flex>
          <SimpleGrid columns={3} gap="32px" zIndex={1} className="inViewChild">
            {FEATURES.map((item, index) => (
              <FeatureCard {...item} key={index} />
            ))}
          </SimpleGrid>
          <Flex gap="24px" direction="column">
            <Text fontSize="24px" className="inViewChild">
              Top{" "}
              <Text as="span" color="green.400">
                Farms
              </Text>
            </Text>
            <Image alt="top farms" src={farmsTable} className="inViewChild" />
            <ButtonWithAnimatedArrowUpRight
              size="lg"
              variant="secondary"
              as="a"
              href="https://kyberswap.com/farms/ethereum"
              target="_blank"
              className="inViewChild"
            >
              View All Farms
            </ButtonWithAnimatedArrowUpRight>
          </Flex>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
