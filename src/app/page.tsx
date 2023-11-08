import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button, Box, Container, Center, Stack, Flex, Heading, Text, Spacer, Divider } from "@chakra-ui/react";
import { BannerCarousel } from "components/Home/Banner";
import FirstToKnow from "components/Home/FirstToKnow";
import KyberDAO from "components/Home/KyberDAO";
import Platform from "components/Home/Platforms";
import Security from "components/Home/Security";
import Solutions from "components/Home/Solutions";
import Support from "components/Home/Support";
import Wallets from "components/Home/Wallets";
import Image from "next/image";
import { ReactNode } from "react";
export default function Home() {
  return (
    <Box as="main" minH="100vh" position="relative" zIndex={1}>
      <Box
        as="video"
        playsInline
        autoPlay
        muted
        loop
        opacity={0.5}
        position="absolute"
        top="0"
        left="0"
        right="0"
        zIndex={-1}
        width="100%"
        height="900px"
        objectFit="cover"
      >
        <source src="/assets/videos/-0a3e-454e-8eed-471f6f5f18fd.mp4" type="video/webm"></source>
      </Box>
      <Spacer height="160px" />
      <Container>
        <Stack direction="row">
          <Flex p={8} flex={4} align={"center"} justify={"center"}>
            <Stack spacing="48px" w={"full"} maxW={"lg"}>
              <Image alt="Kyberswap" src="/assets/images/logo-dark.svg" width={170} height={60} />
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="extrabold">
                <Text as={"span"} position={"relative"} color="green.400">
                  Limitless Access
                </Text>
                <br />{" "}
                <Text color={"white"} as={"span"}>
                  to DeFi
                </Text>{" "}
              </Heading>
              <Button
                rounded="xl"
                color="grey.900"
                colorScheme="green"
                fontWeight="medium"
                fontSize={18}
                lineHeight={24}
                width="fit-content"
                padding="16px 24px"
              >
                Start Now{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z"
                    fill="#0F0F0F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V8H7C6.44772 8 6 7.55228 6 7Z"
                    fill="#0F0F0F"
                  />
                </svg>
              </Button>
            </Stack>
          </Flex>
          <Flex flex={5} direction="column" gap="24px">
            <Flex direction="column">
              <Text fontSize="2xl" color="white">
                Top Traded Tokens
              </Text>
              <Box as="div" width="100%" height="220px" position="relative">
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
            <Flex direction="column">
              <Text fontSize="2xl" color="white">
                Top Pool Returns
              </Text>
              <Box as="div" width="100%" height="220px" position="relative">
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
        <Spacer height="60px" />

        <Center>
          <BannerCarousel />
        </Center>

        <Spacer height="100px" />

        <Platform />
        <Spacer height="100px" />
        <Solutions />

        <Spacer height="100px" />
        <KyberDAO />
        <Spacer height="100px" />
        <Security />
        <Spacer height="100px" />
        <Wallets />
        <Spacer height="100px" />
        <Support />
        <Spacer height="100px" />
        <FirstToKnow />
        <Spacer height="100px" />
      </Container>
    </Box>
  );
}

const Section = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};
