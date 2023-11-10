import { ArrowUpRight } from "react-feather";
import { Box, Button, Center, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { getChainsConfig } from "hooks/services/index";
import { HighlightGroup, HighlighterItem } from "components/motion/Highlighter";

export default async function Platform() {
  const chains = await getChainsConfig();

  return (
    <Stack gap="32px" align="center" p={{ base: "12px", md: "0" }}>
      <Heading
        fontSize={{ base: "24px", md: "48px" }}
        textAlign={{ base: "center", md: "left" }}
        px={{ base: "12px", md: "0" }}
      >
        1 Platform, {chains.length} Chains, All DeFi
      </Heading>
      <HighlightGroup w="100%">
        <HighlighterItem>
          <Stack
            bg="whiteAlpha.50"
            backdropFilter="blur(16px)"
            width="100%"
            p="24px 8px"
            rounded="2xl"
            direction="row"
            align="center"
            justify="center"
            gap={{ base: "16px", md: "8px" }}
            sx={{ ">div": { flexGrow: { base: 0, md: 1 }, flexBasis: { base: "43%", md: "unset" } } }}
            wrap={{ base: "wrap", md: "nowrap" }}
          >
            <Flex direction="column" align="center">
              <Text fontSize={36}>$2.13B</Text>
              <Text fontSize={14} color="whiteAlpha.600" textAlign="center">
                Total Trading Volume
              </Text>
            </Flex>
            <Divider orientation="vertical" h="24px" color="whiteAlpha.400" />
            <Flex direction="column" align="center">
              <Text fontSize={36}>$2.13B</Text>
              <Text fontSize={14} color="whiteAlpha.600" textAlign="center">
                Total Transactions
              </Text>
            </Flex>
            <Divider orientation="vertical" h="24px" color="whiteAlpha.400" display={{ base: "none", md: "block" }} />
            <Flex direction="column" align="center">
              <Text fontSize={36}>$2.13B</Text>
              <Text fontSize={14} color="whiteAlpha.600" textAlign="center">
                Total Value Locked
              </Text>
            </Flex>
            <Divider orientation="vertical" h="24px" color="whiteAlpha.400" />

            <Flex direction="column" align="center">
              <Text fontSize={36}>$2.13B</Text>
              <Text fontSize={14} color="whiteAlpha.600" textAlign="center">
                Rewards Distributed
              </Text>
            </Flex>
          </Stack>
        </HighlighterItem>
      </HighlightGroup>
      <Stack direction="row" wrap="wrap" justify="space-evenly" rowGap="24px" columnGap="8px">
        <>
          {chains.map((chain: any) => {
            return (
              <Flex
                key={chain.displayName}
                direction="column"
                align="center"
                width={{ base: "100px", md: "120px" }}
                height="fit-content"
                justify="space-between"
                gap="6px"
              >
                <Box rounded="full" h="48px" w="48px" position="relative">
                  <Image src={chain.logoUrl} fill alt="token" />
                </Box>
                <Text color="whiteAlpha.600" textAlign="center" fontSize={{ base: "14px", md: "16px" }}>
                  {chain.displayName}
                </Text>
              </Flex>
            );
          })}
        </>
      </Stack>
      <Center>
        <Button variant="outline" p="16px 24px" h="fit-content" rounded="2xl" lineHeight="24px" fontSize="18px">
          <Flex gap="12px">
            Explore our Ecosystem <ArrowUpRight />
          </Flex>
        </Button>
      </Center>
    </Stack>
  );
}
