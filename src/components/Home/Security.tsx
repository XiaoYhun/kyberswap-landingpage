import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export default function Security() {
  return (
    <BoxInViewMotion>
      <Flex gap={{ base: 0, md: "24px" }} direction={{ base: "column", md: "row" }}>
        <Flex flex={6} p={{ base: "12px", md: 0 }} justify="center" align="start" direction="column" gap="16px">
          <Heading size="2xl" lineHeight="normal" className="inViewChild">
            Robust & Optimal Security
          </Heading>
          <Text color="whiteAlpha.600" lineHeight="24px" mb="16px" fontWeight="normal" className="inViewChild">
            KyberSwap security fund, smart contract audits, bug bounty programs and other best practices are in place to
            ensure the highest security levels.
          </Text>
          <Button
            variant="outline"
            rounded="2xl"
            fontSize="lg"
            p="16px 24px"
            as="a"
            href="https://docs.kyberswap.com/reference/audits"
            target="_blank"
            className="inViewChild"
          >
            Learn More <ArrowUpRight />
          </Button>
        </Flex>
        <Center flex={4} className="inViewChild">
          <Box width="100%" height={{ base: "300px", md: "400px" }} position="relative">
            <Image src="/assets/images/security.png" alt="kyberDAO" fill style={{ objectFit: "contain" }} />
          </Box>
        </Center>
      </Flex>
    </BoxInViewMotion>
  );
}
