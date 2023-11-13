import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  Image,
  Flex,
  Divider,
  Tooltip,
  Button,
} from "@chakra-ui/react";

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
              <Box as="a" href="https://discord.com/invite/NB3vc8J9uv" target="_blank">
                <Image src="/assets/svg/community/mono/discord.svg" />
              </Box>
              <Box as="a" href="https://t.me/kybernetwork" target="_blank">
                <Image src="/assets/svg/community/mono/telegram.svg" />
              </Box>
              <Box as="a" href="https://twitter.com/KyberNetwork" target="_blank">
                <Image src="/assets/svg/community/mono/twitter.svg" />
              </Box>
              <Box as="a" href="https://blog.kyberswap.com/" target="_blank">
                <Image src="/assets/svg/community/mono/blog.svg" />
              </Box>
              <Box as="a" href="https://debank.com/official-account/110644/stream" target="_blank">
                <Image src="/assets/svg/community/mono/debank.svg" />
              </Box>
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
          <Flex align="center" gap="12px" fontSize="12px" color="greyAlpha.500" fontWeight="light">
            <Flex align="center" gap="6px" color="greyAlpha.500">
              <div>Powered By</div>
              <a target="_blank" rel="noopener noreferrer" href="https://kyber.network">
                <img src="/assets/svg/footer-kybernetwork.svg" alt="chain-security" width="40px" />
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
                <img src="/assets/svg/chain-security.svg" alt="chain-security" width="98px" />
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
