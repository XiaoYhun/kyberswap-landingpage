import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import CardFeature from "components/Shared/CardFeature";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";

const FEATURES = [
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Voting power and rewards",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Gas refunds",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Collateral for loans",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Earn fees as a KNC liquidity provider",
  },
  {
    logoSrc: "/assets/svg/liquidity-protocols/feature-1.svg",
    title: "Yield farm incentives",
  },
];

export default function TokenUtility() {
  return (
    <BoxInViewMotion>
      <Container>
        <Flex direction="column" align="center" gap="40px">
          <Flex direction="column" align="center" gap="12px">
            <Text textStyle="sub" className="inViewChild">
              TOKEN UTILITY
            </Text>
            <Heading size="2xl" className="inViewChild">
              What is KNC used for?
            </Heading>
            <Text textAlign="center" fontWeight="normal" fontSize="20px" className="inViewChild">
              Holders can stake their KNC and vote on Kyber Improvement Proposals to receive trading fees generated on
              KyberSwap. As KyberSwap grows with increased trading activity, KNC voters get more rewards!
            </Text>
          </Flex>
          <Flex
            w="full"
            wrap="wrap"
            gap="48px"
            justify="center"
            sx={{
              ">div": { width: "300px", height: "190px" },
            }}
            className="inViewChild"
          >
            <>
              {FEATURES.map((item, index) => (
                <CardFeature {...item} key={index} />
              ))}
            </>
          </Flex>
          <ButtonWithAnimatedArrowUpRight size="lg" variant="secondary" className="inViewChild">
            KNC Utility
          </ButtonWithAnimatedArrowUpRight>
        </Flex>
      </Container>
    </BoxInViewMotion>
  );
}
