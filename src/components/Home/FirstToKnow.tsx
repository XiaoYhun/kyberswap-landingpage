import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";

const COMMUNITIES = [
  { imageSrc: "/assets/svg/community/discord.svg", href: "https://discord.gg/kyberswap", alt: "discord" },
  { imageSrc: "/assets/svg/community/telegram.svg", href: "https://t.me/kybernetwork", alt: "telegram" },
  { imageSrc: "/assets/svg/community/twitter.svg", href: "https://twitter.com/KyberNetwork", alt: "twitter" },
  {
    imageSrc: "/assets/svg/community/debank.svg",
    href: "https://debank.com/official-account/110644/stream",
    alt: "debank",
  },
  { imageSrc: "/assets/svg/community/facebook.svg", href: "#", alt: "facebook" },
  { imageSrc: "/assets/svg/community/linkedin.svg", href: "#", alt: "linkedin" },
];
export default function FirstToKnow() {
  return (
    <BoxInViewMotion>
      <Flex align="center" direction="column" gap="16px">
        <Heading size="2xl" lineHeight="normal" className="inViewChild">
          Be the first to know
        </Heading>
        <Text color="whiteAlpha.600" fontSize="lg" fontWeight="normal" className="inViewChild">
          Get alpha from our channels & community
        </Text>
        <Stack direction="row" gap="20px" className="inViewChild">
          <>
            {COMMUNITIES.map((c) => {
              return <CommunityIcon key={c.alt} community={c} />;
            })}
          </>
        </Stack>
      </Flex>
    </BoxInViewMotion>
  );
}

const CommunityIcon = ({ community }: { community: (typeof COMMUNITIES)[number] }) => {
  return (
    <Box
      rounded="full"
      h="36px"
      w="36px"
      position="relative"
      _hover={{ filter: "brightness(1.2)" }}
      as="a"
      href={community.href}
      target="_blank"
    >
      <Image src={community.imageSrc} alt={community.alt} fill />
    </Box>
  );
};
