import { Box, Container, Flex, Spacer, Stack, Text, Button, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export default function Ecosystem() {
  return (
    <>
      <Box position="absolute" top="0" left="0" right="0" zIndex={-1} width="100%" h="640px">
        <Image src="/assets/images/background.png" alt="bg" fill style={{ objectFit: "cover", opacity: "50%" }} />
      </Box>
      <Container>
        <Spacer h="100px" />
        <Flex align="center">
          <Flex flex={5} direction="column" gap="16px">
            <Text>Ecosystem</Text>
            <Heading size="2xl">KyberSwap Ecosystem</Heading>
            <Text color="whiteAlpha.600" fontWeight="normal">
              Explore the KyberSwap ecosystem of partners, integrations and stakeholders.
            </Text>
            <Text color="whiteAlpha.600" fontWeight="normal">
              We have a growing network of over 100 dApps building on top of our protocols to offer users superior rates
              and higher earnings!
            </Text>
            <Flex gap="24px" mt="16px">
              <Button variant="outline" p="16px 24px" rounded="2xl">
                Bussiness Enquiries
              </Button>
              <Button variant="outline" p="16px 24px" rounded="2xl">
                Docs
                <ArrowUpRight />
              </Button>
            </Flex>
          </Flex>
          <Box flex={4} w="480px" h="480px" position="relative">
            <Image src="/assets/images/ecosystem.gif" alt="kyber-ecosystem" fill style={{ objectFit: "cover" }} />
          </Box>
        </Flex>
      </Container>
      <Box w="100%" minH="700px" bg="grey.900">
        <Container>
          <Box w="100%" h="40px" rounded="full" bg="grey.700"></Box>
        </Container>
      </Box>
    </>
  );
}
