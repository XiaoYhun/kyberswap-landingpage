import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import BoxWithGradientBorder from "components/Shared/BoxWithGradientBorder";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import { getDaoInfo, getDaoRewardStats } from "services";

export default async function KyberDAOStats() {
  const [daoStats, rewardStats] = await Promise.all([getDaoInfo(), getDaoRewardStats()]);

  return (
    <BoxInViewMotion>
      <Container transform="translateY(-50%)">
        <Box className="inViewChild">
          <BoxWithGradientBorder
            borderSize={1}
            bg="grey.900"
            p="24px 0"
            boxShadow="xl"
            borderRadius="3xl"
            borderGradient="linear-gradient(to left top,#4b1f64, #4b947e)"
          >
            <Flex align="center" justify="center">
              <Flex direction="column" flex={1} align="center">
                <Text textStyle="sub" className="inViewChild">
                  Total Staked KNC
                </Text>
                <Text fontSize="36px" lineHeight="tall" className="inViewChild">
                  {daoStats && Math.floor(daoStats.total_staked).toLocaleString() + " KNC"}
                </Text>
                <Text textStyle="sub" className="inViewChild">
                  800,000,000 USD
                </Text>
              </Flex>
              <Divider orientation="vertical" height="60px" borderColor="greyAlpha.400" />
              <Flex direction="column" flex={1} align="center">
                <Text textStyle="sub" className="inViewChild">
                  Current Voting Rewards
                </Text>
                <Text fontSize="36px" lineHeight="tall" className="inViewChild">
                  {rewardStats &&
                    Math.floor(
                      +rewardStats.pending?.totalAmountInKNC + +rewardStats.liquidated?.totalAmountInKNC
                    ).toLocaleString() + " KNC"}
                </Text>
                <Text textStyle="sub" className="inViewChild">
                  ~ 128,508 USD
                </Text>
              </Flex>
              <Divider orientation="vertical" height="60px" borderColor="greyAlpha.400" />
              <Flex direction="column" flex={1} align="center">
                <Text textStyle="sub" className="inViewChild">
                  Voting APR
                </Text>
                <Text fontSize="36px" lineHeight="tall" className="inViewChild">
                  2.45%
                </Text>
              </Flex>
            </Flex>
          </BoxWithGradientBorder>
        </Box>
      </Container>
    </BoxInViewMotion>
  );
}
