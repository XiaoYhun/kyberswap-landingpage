import { Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BoxWithGradientBorder from "components/Shared/BoxWithGradientBorder";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";
import farmsTable from "assets/images/table-big-2.png";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
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
              <CardFeature {...item} key={index} />
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

const CardFeature = ({ logoSrc, title, desc }: { logoSrc: string; title: string; desc: string }) => {
  return (
    <BoxWithGradientBorder
      rounded="3xl"
      h="220px"
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
        inset="70px 0 0 0"
        bg="blackAlpha.800"
        rounded="inherit"
        margin="-1px"
        border="0.3px solid rgba(98, 116, 110, 0.1)"
        backdropFilter="blur(2px)"
        p="24px"
        transform="translate3d(0, 0, 15px)"
      >
        <Flex direction="column" h="full" justify="center" gap="8px">
          <Text fontSize="20px">{title}</Text>
          <Text textStyle="sub" fontSize="14px" lineHeight="tall">
            {desc}
          </Text>
        </Flex>
      </Box>
      <Box position="absolute" left="50%" transform="translate3d(-50%, 40px, 30px)">
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
