"use client";

import { Center, Flex } from "@chakra-ui/react";
import DropdownIcon from "components/SVG/DropdownIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";
const BannerWrapper = ({ children, ...rest }: { children: ReactNode } & any) => {
  const variants = {
    left: {
      x: -200,
      filter: "brightness(0.6)",
      zIndex: 1,
      opacity: 0.9,
      scale: 1,
      boxShadow: "0 0 0 0 #00000040",
    },
    center: {
      scale: 1.2,
      opacity: 1,
      zIndex: 2,
      boxShadow: "0 0 10px 2px #00000040",
    },
    right: {
      x: 200,
      filter: "brightness(0.6)",
      zIndex: 1,
      opacity: 0.9,
      scale: 1,
      boxShadow: "0 0 0 0 #00000040",
    },
  };
  return (
    <motion.div
      rounded="md"
      overflow="hidden"
      zIndex={1}
      variants={variants}
      transition={{ type: "spring", damping: 60, stiffness: 400 }}
      style={{ width: "600px", height: "280px", position: "absolute", borderRadius: "20px", overflow: "hidden" }}
      {...rest}
    >
      {children}
    </motion.div>
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
    <Flex position="relative" justify="center" align="center" height="300px">
      <BannerWrapper animate={list[count % 3]}>
        <Image
          src="/assets/images/banner.png"
          alt="banner"
          fill
          style={{
            objectFit: "cover",
          }}
          quality={100}
        />
      </BannerWrapper>
      <BannerWrapper animate={list[(count + 1) % 3]}>
        <Image
          src="/assets/images/banner.png"
          alt="banner"
          fill
          style={{
            objectFit: "cover",
          }}
          quality={100}
        />
      </BannerWrapper>
      <BannerWrapper animate={list[(count + 2) % 3]}>
        <Image
          src="/assets/images/banner.png"
          alt="banner"
          fill
          style={{
            objectFit: "cover",
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
        left="-330px"
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
        right="-330px"
        cursor="pointer"
        _hover={{ bg: "blackAlpha.900" }}
        sx={{ transform: "rotate(-90deg)", transition: "0.2s all" }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        <DropdownIcon size={30} />
      </Center>
    </Flex>
  );
}
