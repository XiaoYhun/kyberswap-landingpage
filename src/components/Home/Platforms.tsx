import { ArrowUpRight } from "react-feather";
import { Box, Button, Center, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { getChainsConfig } from "hooks/services/index";

export default async function Platform() {
  const chains = await getChainsConfig();

  const CHAINS = [
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
    {
      iconSrc:
        "https://storage.googleapis.com/ks-setting-1d682dca/fd07cf5c-3ddf-4215-aa51-e6ee2c60afbc1697031732146.png",
      title: "Ethereum",
    },
  ];

  return (
    <Stack gap="32px" align="center">
      <Heading as="h1" fontSize={48}>
        1 Platform, 15 Chains, All DeFi
      </Heading>
      <Stack
        bg="whiteAlpha.50"
        backdropFilter="blur(16px)"
        width="100%"
        p="24px 0"
        rounded="2xl"
        direction="row"
        align="center"
        sx={{ ">div": { flex: 1 } }}
      >
        <Flex direction="column" align="center">
          <Text fontSize={36}>$2.13B</Text>
          <Text fontSize={14} color="whiteAlpha.600">
            Total Trading Volume
          </Text>
        </Flex>
        <Divider orientation="vertical" h="24px" color="whiteAlpha.400" />
        <Flex direction="column" align="center">
          <Text fontSize={36}>$2.13B</Text>
          <Text fontSize={14} color="whiteAlpha.600">
            Total Transactions
          </Text>
        </Flex>
        <Divider orientation="vertical" h="24px" color="whiteAlpha.400" />

        <Flex direction="column" align="center">
          <Text fontSize={36}>$2.13B</Text>
          <Text fontSize={14} color="whiteAlpha.600">
            Total Value Locked
          </Text>
        </Flex>
        <Divider orientation="vertical" h="24px" color="whiteAlpha.400" />

        <Flex direction="column" align="center">
          <Text fontSize={36}>$2.13B</Text>
          <Text fontSize={14} color="whiteAlpha.600">
            Rewards Distributed
          </Text>
        </Flex>
      </Stack>
      <Stack direction="row" wrap="wrap" justify="center" rowGap="24px" columnGap="8px">
        <>
          {chains.map((chain: any) => {
            return (
              <Flex direction="column" align="center" width="120px" height="80px" justify="space-between">
                <Box rounded="full" h="48px" w="48px" position="relative">
                  <Image src={chain.logoUrl} fill alt="token" />
                </Box>
                <Text color="whiteAlpha.600">{chain.displayName}</Text>
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
