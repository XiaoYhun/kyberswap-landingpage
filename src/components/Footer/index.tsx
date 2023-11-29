import { ReactNode } from "react";
import { Box, Container, Stack, SimpleGrid, Text, Image, Flex, Divider, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text lineHeight={6} fontWeight={"500"} fontSize="sm" mb={1} color="whiteAlpha.600">
      {children}
    </Text>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      as="footer"
      bg="grey.900"
      color="white"
      position="relative"
      zIndex={2}
      borderTopWidth="1px"
      borderTopColor="greyAlpha.200"
    >
      <Container as={Stack} maxW={"6xl"} py={{ base: 6, md: 14 }} sx={{ a: { _hover: { color: "green.400" } } }}>
        <SimpleGrid columns={{ base: 2, md: 5 }} p={{ base: "16px", md: 0 }} spacing={8}>
          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Solutions</ListHeader>
            <Link href="/dex-aggregator">DEX Aggregator</Link>
            <Link href="/liquidity protocols">Liquidity Protocols</Link>
            <Link href="/kyberai">KyberAI</Link>
            <Link href="/limit-orders">Limit Orders</Link>
          </Stack>

          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Governance</ListHeader>
            <Link href="/kyberdao">KyberDAO</Link>
            <Link href="/knc">KNC token</Link>
          </Stack>

          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Developers</ListHeader>
            <Link target="_blank" href="#">
              Docs
            </Link>
            <Link target="_blank" href="#">
              APIs
            </Link>
            <Link target="_blank" href="#">
              GitHub
            </Link>
            <Link target="_blank" href="#">
              Bug Bounty
            </Link>
          </Stack>
          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Contact Us</ListHeader>
            <Link target="_blank" href={"https://forms.gle/ouU3WrwrxESfaVRe8"}>
              Business Enquiries
            </Link>
            <Link target="_blank" href={"https://support.kyberswap.com/hc/en-us"}>
              Customer Support
            </Link>
            <Link
              target="_blank"
              href={"https://kybernetwork.notion.site/Kyber-Network-Press-Kit-4ceaad9056d146aa83ef78dc49cfe72f"}
            >
              Press Kit
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Community</ListHeader>
            <Stack
              direction="row"
              sx={{ image: { height: "24px", width: "24px", _hover: { fill: "whiteAlpha.600" } }, cursor: "pointer" }}
            >
              <Link href="https://discord.gg/kyberswap" target="_blank">
                <Image src="/assets/svg/community/mono/discord.svg" alt="discord" />
              </Link>
              <Link href="https://t.me/kybernetwork" target="_blank">
                <Image src="/assets/svg/community/mono/telegram.svg" alt="telegram" />
              </Link>
              <Link href="https://twitter.com/KyberNetwork" target="_blank">
                <Image src="/assets/svg/community/mono/twitter.svg" alt="twitter" />
              </Link>
              <Link href="https://blog.kyberswap.com/" target="_blank">
                <Image src="/assets/svg/community/mono/blog.svg" alt="blog" />
              </Link>
              <Link href="https://debank.com/official-account/110644/stream" target="_blank">
                <Image src="/assets/svg/community/mono/debank.svg" alt="debank" />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderStyle={"solid"} bgColor="grey.700" color="greyAlpha.480" px={{ base: "16px", md: "0" }}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={3}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Flex align="center" gap="12px" fontSize="12px" color="greyAlpha.500" fontWeight="light" h="42px">
            <Flex align="center" gap="6px" color="greyAlpha.500">
              <div>Powered By</div>
              <a target="_blank" rel="noopener noreferrer" href="https://kyber.network">
                <Image src="/assets/svg/footer-kybernetwork.svg" alt="chain-security" width="48px" height="30px" />
              </a>
            </Flex>
            <Divider orientation="vertical" height="16px" borderColor="greyAlpha.500" />
            <Flex align="center" gap="6px">
              <div>Audited By</div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chainsecurity.com/security-audit/kyberswap-elastic"
              >
                <Image src="/assets/svg/chain-security.svg" alt="chain-security" width="98px" height="20px" />
              </a>
              <span>
                <div>
                  <Tooltip label="Covers smart-contracts" hasArrow arrowSize={5}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentcolor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </Tooltip>
                </div>
              </span>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
