"use client";

import { Box, Center, Flex } from "@chakra-ui/react";
import DropdownIcon from "components/SVG/DropdownIcon";
import { MotionBox } from "components/motion";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";
const BannerWrapper = ({ children, ...rest }: { children: ReactNode } & any) => {
  const variants = {
    left: {
      x: -300,
      filter: "brightness(0.4)",
      zIndex: 1,
      opacity: 0.8,
      scale: 0.7,
      boxShadow: "0 0 0 0 #00000040",
    },
    center: {
      scale: 1,
      opacity: 1,
      zIndex: 2,
      boxShadow: "0 0 10px 2px #00000040",
    },
    right: {
      x: 300,
      filter: "brightness(0.4)",
      zIndex: 1,
      opacity: 0.8,
      scale: 0.7,
      boxShadow: "0 0 0 0 #00000040",
    },
  };
  return (
    <MotionBox
      zIndex={1}
      variants={variants}
      transition={{ type: "spring", damping: 60, stiffness: 400 }}
      rounded={{ base: "none", md: "2xl" }}
      overflow="hidden"
      w={{ base: "100vw", md: "600px" }}
      aspectRatio={60 / 34}
      h={{
        base: "auto",
        md: "340px",
      }}
      style={{ position: "absolute", overflow: "hidden" }}
      {...rest}
    >
      <Box>{children}</Box>
    </MotionBox>
  );
};

export function BannerCarousel() {
  const [count, setCount] = useState(99999);
  const list = ["center", "right", "left"];

  useEffect(() => {
    const nextStep = () => {
      setCount((prev) => ++prev);
    };
    const timeout = setTimeout(() => {
      nextStep();
    }, 10_000);
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [count]);

  return (
    <BoxInViewMotion delay={0.5}>
      <Flex
        className="inViewChild"
        position="relative"
        justify="center"
        align="center"
        height="auto"
        aspectRatio={60 / 34}
        w={{ base: "100vw", md: "600px" }}
        overflow={{ base: "hidden", md: "visible" }}
      >
        <BannerWrapper animate={list[count % 3]}>
          <Image
            src="/assets/images/banner1.jpg"
            alt="banner"
            fill
            style={{
              objectFit: "contain",
            }}
            quality={100}
          />
        </BannerWrapper>
        <BannerWrapper animate={list[(count + 1) % 3]}>
          <Image
            src="/assets/images/banner2.jpg"
            alt="banner"
            fill
            style={{
              objectFit: "contain",
            }}
            quality={100}
          />
        </BannerWrapper>
        <BannerWrapper animate={list[(count + 2) % 3]}>
          <Image
            src="/assets/images/banner3.jpg"
            alt="banner"
            fill
            style={{
              objectFit: "contain",
            }}
            quality={100}
          />
        </BannerWrapper>
        <Center
          zIndex={4}
          position="absolute"
          color="white"
          bg="blackAlpha.600"
          w="35px"
          h="35px"
          p="0"
          rounded="full"
          left="10px"
          cursor="pointer"
          _hover={{ bg: "blackAlpha.900" }}
          sx={{ transform: "rotate(90deg)", transition: "0.2s all" }}
          onClick={() => setCount((prev) => prev - 1)}
        >
          <DropdownIcon size={30} />
        </Center>
        <Center
          zIndex={4}
          position="absolute"
          color="white"
          bg="blackAlpha.600"
          w="35px"
          h="35px"
          p="0"
          rounded="full"
          right="10px"
          cursor="pointer"
          _hover={{ bg: "blackAlpha.900" }}
          sx={{ transform: "rotate(-90deg)", transition: "0.2s all" }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          <DropdownIcon size={30} />
        </Center>
      </Flex>
    </BoxInViewMotion>
  );
}
