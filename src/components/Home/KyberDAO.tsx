import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export default function KyberDAO() {
  return (
    <BoxInViewMotion>
      <Flex gap={{ base: 0, md: "24px" }} direction={{ base: "column", md: "row" }}>
        <Center flex={4} order={{ base: 2, md: 1 }} className="inViewChild">
          <Box width="100%" height={{ base: "300px", md: "400px" }} position="relative">
            <Image src="/assets/images/kyberdao.png" alt="kyberDAO" fill style={{ objectFit: "contain" }} />
          </Box>
        </Center>
        <Flex
          flex={6}
          p={{ base: "12px", md: 0 }}
          justify="center"
          align="start"
          direction="column"
          gap="16px"
          order={{ base: 1, md: 2 }}
        >
          <Heading size="2xl" lineHeight="normal" className="inViewChild">
            KyberDAO & KNC
          </Heading>
          <Text color="whiteAlpha.600" lineHeight="24px" mb="16px" fontWeight="normal" className="inViewChild">
            Join KyberDAO to shape the future of KyberSwap. Stake KNC, Vote, and Earn rewards!
          </Text>
          <ButtonWithAnimatedArrowUpRight
            variant="outline"
            rounded="2xl"
            fontSize="lg"
            p="16px 24px"
            className="inViewChild"
          >
            Learn More
          </ButtonWithAnimatedArrowUpRight>
        </Flex>
      </Flex>
    </BoxInViewMotion>
  );
}
