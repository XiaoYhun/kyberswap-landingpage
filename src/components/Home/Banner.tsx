"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import { MotionDiv } from "components/motion";
import Image from "next/image";
import { ReactNode, useState } from "react";
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
    <MotionDiv
      rounded="md"
      overflow="hidden"
      zIndex={1}
      initial={{ x: 0, opacity: 0, scale: 0.5 }}
      variants={variants}
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      style={{ width: "600px", height: "280px", position: "absolute", borderRadius: "20px", overflow: "hidden" }}
      {...rest}
    >
      {children}
    </MotionDiv>
  );
};

export function BannerCarousel() {
  const [count, setCount] = useState(9999);
  const list = ["center", "right", "left"];
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
      <Button
        zIndex={4}
        variant="solid"
        colorScheme="green"
        left="-300px"
        opacity={0.5}
        _hover={{ opacity: 1 }}
        onClick={() => setCount((prev) => prev - 1)}
      >
        &lt;
      </Button>
      <Button
        zIndex={4}
        variant="solid"
        colorScheme="green"
        right="-300px"
        opacity={0.5}
        _hover={{ opacity: 1 }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        &gt;
      </Button>
    </Flex>
  );
}
