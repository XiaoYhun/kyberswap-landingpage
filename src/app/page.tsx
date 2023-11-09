import { Button, Box, Container, Center, Stack, Flex, Heading, Text, Spacer, Divider } from "@chakra-ui/react";
import { BannerCarousel } from "components/Home/Banner";
import FirstToKnow from "components/Home/FirstToKnow";
import Hero from "components/Home/Hero";
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
        <Hero />
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
