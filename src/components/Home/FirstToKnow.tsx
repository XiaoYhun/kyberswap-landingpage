import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const COMMUNITIES = [
  { imageSrc: "/assets/svg/community/discord.svg", alt: "discord" },
  { imageSrc: "/assets/svg/community/telegram.svg", alt: "telegram" },
  { imageSrc: "/assets/svg/community/twitter.svg", alt: "twitter" },
  { imageSrc: "/assets/svg/community/debank.svg", alt: "debank" },
  { imageSrc: "/assets/svg/community/facebook.svg", alt: "facebook" },
  { imageSrc: "/assets/svg/community/linkedin.svg", alt: "linkedin" },
];
export default function FirstToKnow() {
  return (
    <Flex align="center" direction="column" gap="16px">
      <Heading size="2xl" lineHeight="normal">
        Be the first to know
      </Heading>
      <Text color="whiteAlpha.600" fontSize="lg">
        Get alpha from our channels & community
      </Text>
      <Stack direction="row" gap="20px">
        <>
          {COMMUNITIES.map((c) => {
            return <CommunityIcon community={c} />;
          })}
        </>
      </Stack>
    </Flex>
  );
}

const CommunityIcon = ({ community }: { community: (typeof COMMUNITIES)[number] }) => {
  return (
    <Box rounded="full" h="36px" w="36px" position="relative">
      <Image src={community.imageSrc} alt={community.alt} fill />
    </Box>
  );
};
