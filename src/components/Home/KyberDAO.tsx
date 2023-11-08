import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export default function KyberDAO() {
  return (
    <Flex gap="24px">
      <Center flex={4}>
        <Box width="100%" height="400px" position="relative">
          <Image src="/assets/images/kyberDAO.png" alt="kyberDAO" fill style={{ objectFit: "contain" }} />
        </Box>
      </Center>
      <Flex flex={6} justify="center" align="start" direction="column" gap="16px">
        <Heading size="2xl" lineHeight="normal">
          KyberDAO & KNC
        </Heading>
        <Text color="whiteAlpha.600" lineHeight="24px" mb="16px">
          Join KyberDAO to shape the future of KyberSwap. Stake KNC, Vote, and Earn rewards!
        </Text>
        <Button variant="outline" rounded="2xl" fontSize="lg" p="16px 24px">
          Learn More
          <ArrowUpRight />
        </Button>
      </Flex>
    </Flex>
  );
}
