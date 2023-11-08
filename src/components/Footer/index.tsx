"use client";

import { ReactNode } from "react";
import { Box, Container, Stack, SimpleGrid, Text, VisuallyHidden, chakra, Image } from "@chakra-ui/react";
import { Foldit } from "next/font/google";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text lineHeight={6} fontWeight={"500"} fontSize="sm" mb={1} color="whiteAlpha.600">
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={"whiteAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "whiteAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box as="footer" bg="grey.900" color="white" position="relative" zIndex={2}>
      <Container as={Stack} maxW={"6xl"} py={10} sx={{ a: { _hover: { color: "green.400" } } }}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Solutions</ListHeader>
            <Box as="a" href="#">
              DEX Aggregator
            </Box>
            <Box as="a" href="#">
              Liquidity Protocols
            </Box>
            <Box as="a" href="#">
              KyberAI
            </Box>
            <Box as="a" href="#">
              Limit Orders
            </Box>
          </Stack>

          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Governance</ListHeader>
            <Box as="a" href="#">
              KyberDAO
            </Box>
            <Box as="a" href="#">
              KNC token
            </Box>
          </Stack>

          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Developers</ListHeader>
            <Box as="a" target="_blank" href="#">
              Docs
            </Box>
            <Box as="a" target="_blank" href="#">
              APIs
            </Box>
            <Box as="a" target="_blank" href="#">
              GitHub
            </Box>
            <Box as="a" target="_blank" href="#">
              Bug Bounty
            </Box>
          </Stack>
          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Contact Us</ListHeader>
            <Box as="a" target="_blank" href={"https://forms.gle/ouU3WrwrxESfaVRe8"}>
              Business Enquiries
            </Box>
            <Box as="a" target="_blank" href={"https://support.kyberswap.com/hc/en-us"}>
              Customer Support
            </Box>
            <Box
              as="a"
              target="_blank"
              href={"https://kybernetwork.notion.site/Kyber-Network-Press-Kit-4ceaad9056d146aa83ef78dc49cfe72f"}
            >
              Press Kit
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Community</ListHeader>
            <Stack
              direction="row"
              sx={{ image: { height: "24px", width: "24px", _hover: { fill: "whiteAlpha.600" } }, cursor: "pointer" }}
            >
              <Image src="/assets/svg/community/mono/discord.svg" />
              <Image src="/assets/svg/community/mono/telegram.svg" />
              <Image src="/assets/svg/community/mono/twitter.svg" />
              <Image src="/assets/svg/community/mono/blog.svg" />
              <Image src="/assets/svg/community/mono/debank.svg" />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderStyle={"solid"} bgColor="grey.700" color="greyAlpha.480">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}></Stack>
        </Container>
      </Box>
    </Box>
  );
}