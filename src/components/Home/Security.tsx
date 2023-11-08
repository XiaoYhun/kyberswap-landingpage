import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export default function Security() {
  return (
    <Flex gap="24px">
      <Flex flex={6} justify="center" align="start" direction="column" gap="16px">
        <Heading size="2xl" lineHeight="normal">
          Robust & Optimal Security
        </Heading>
        <Text color="whiteAlpha.600" lineHeight="24px" mb="16px">
          KyberSwap security fund, smart contract audits, bug bounty programs and other best practices are in place to
          ensure the highest security levels.
        </Text>
        <Button variant="outline" rounded="2xl" fontSize="lg" p="16px 24px">
          Learn More <ArrowUpRight />
        </Button>
      </Flex>
      <Center flex={4}>
        <Box width="100%" height="400px" position="relative">
          <Image src="/assets/images/security.png" alt="kyberDAO" fill style={{ objectFit: "contain" }} />
        </Box>
      </Center>
    </Flex>
  );
}
