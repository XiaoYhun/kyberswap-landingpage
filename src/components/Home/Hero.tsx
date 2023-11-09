import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export default function Hero() {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={4} align={"center"} justify={"center"}>
        <Stack spacing="48px" w={"full"} maxW={"lg"}>
          <Image alt="Kyberswap" src="/assets/images/logo-dark.svg" width={170} height={60} />
          <Heading fontSize="4xl" fontWeight="extrabold">
            <Text as={"span"} position={"relative"} color="green.400">
              Limitless Access
            </Text>
            <br />{" "}
            <Text color={"white"} as={"span"}>
              to DeFi
            </Text>{" "}
          </Heading>
          <Button
            rounded="3xl"
            color="grey.900"
            colorScheme="green"
            fontSize="lg"
            lineHeight="normal"
            w="fit-content"
            h="fit-content"
            p="16px 24px"
            as="a"
            href="https://kyberswap.com/swap/ethereum"
            target="_blank"
          >
            Start Now <ArrowUpRight size="24px" />
          </Button>
        </Stack>
      </Flex>
      <Flex flex={5} direction="column" gap="24px">
        <Flex direction="column" gap={{ base: "12px", md: "0px" }}>
          <Text fontSize="2xl" px={{ base: "16px", md: "0px" }} color="white">
            Top Traded Tokens
          </Text>
          <Box as="div" width="100%" height={{ base: "150px", md: "220px" }} position="relative">
            <Image
              src="/assets/images/table1.png"
              alt="top traded tokens"
              fill
              style={{
                objectFit: "contain",
              }}
              quality={100}
            />
          </Box>
        </Flex>
        <Flex direction="column" gap={{ base: "12px", md: "0px" }}>
          <Text fontSize="2xl" px={{ base: "16px", md: "0px" }} color="white">
            Top Pool Returns
          </Text>
          <Box as="div" width="100%" height={{ base: "150px", md: "220px" }} position="relative">
            <Image
              src="/assets/images/table2.png"
              alt="top pool returns"
              fill
              style={{
                objectFit: "contain",
              }}
              quality={100}
            />
          </Box>
        </Flex>
      </Flex>
    </Stack>
  );
}
