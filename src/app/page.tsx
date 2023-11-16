"use client";

import { Button, Box, Container, Center, Stack, Flex, Heading, Text, Spacer, Divider } from "@chakra-ui/react";
import { BannerCarousel } from "components/Home/Banner";
import FirstToKnow from "components/Home/FirstToKnow";
import Hero from "components/Home/Hero";
import KyberDAO from "components/Home/KyberDAO";
import Platform from "components/Home/Platforms";
import Security from "components/Home/Security";
import Solutions from "components/Home/Solutions";
import Stars from "components/Home/Stars";
import Support from "components/Home/Support";
import Wallets from "components/Home/Wallets";
import AnimatedCounter from "components/motion/AnimatedCounter";
import Image from "next/image";
import { ReactNode } from "react";
import { ArrowUpRight } from "react-feather";

export default function Home() {
  return (
    <>
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
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Container>
        <Hero />
        <Spacer height={{ base: "50px", md: "100px" }} />
        <Center>
          <BannerCarousel />
        </Center>
        <Spacer height={{ base: "60px", md: "200px" }} />
        <Platform />
        <AnimatedCounter />
        <Spacer height={{ base: "60px", md: "200px" }} />
        <Solutions />
        <Spacer height={{ base: "60px", md: "200px" }} />
        <KyberDAO />
        <Spacer height={{ base: "60px", md: "200px" }} />
      </Container>
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Container>
          <Security />
          <Spacer height={{ base: "60px", md: "200px" }} />
          <Wallets />
          <Spacer height={{ base: "60px", md: "200px" }} />
          <Support />
          <Spacer height={{ base: "60px", md: "200px" }} />
        </Container>
        <Stars />
      </Box>
      <Box
        position="relative"
        bg="conic-gradient(from 180deg, rgba(75, 70, 229, 0.20) 40deg, rgba(110, 231, 195, 0.20) 120deg, rgba(4, 143, 137, 0.20) 240deg,rgba(75, 70, 229, 0.20) 360deg)"
      >
        <Container>
          <Spacer height={{ base: "60px", md: "200px" }} />
          <FirstToKnow />
          <Spacer height={{ base: "60px", md: "200px" }} />
        </Container>
        <Stars />
      </Box>
    </>
  );
}
