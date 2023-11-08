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
import { ArrowUpRight } from "react-feather";
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
        <Spacer height="100px" />

        <Center>
          <BannerCarousel />
        </Center>

        <Spacer height="200px" />

        <Platform />
        <Spacer height="200px" />
        <Solutions />

        <Spacer height="200px" />
        <KyberDAO />
        <Spacer height="200px" />
        <Security />
        <Spacer height="200px" />
        <Wallets />
        <Spacer height="200px" />
        <Support />
        <Spacer height="200px" />
        <FirstToKnow />
        <Spacer height="200px" />
      </Container>
    </Box>
  );
}

const Section = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};
