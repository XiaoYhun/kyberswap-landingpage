import { Box, Flex, Text } from "@chakra-ui/react";
import BoxWithGradientBorder from "./BoxWithGradientBorder";
import Image from "next/image";

const CardFeature = ({ logoSrc, title, desc }: { logoSrc: string; title: string; desc?: string }) => {
  return (
    <BoxWithGradientBorder
      rounded="3xl"
      h="220px"
      w="full"
      backgroundImage="url(/assets/images/background.png)"
      backgroundPosition="center"
      backgroundSize="cover"
      borderGradient="linear-gradient(to left top, #6EE7C380, #6ed5e780)"
      boxShadow="0px 16px 24px 0px rgba(0, 0, 0, 0.32), 0px -2px 8px 0px rgba(0, 0, 0, 0.04)"
      position="relative"
      transition="0.5s ease"
      transitionProperty="perspective, transform"
      userSelect="none"
    >
      <Box
        position="absolute"
        inset="70px 0 0 0"
        bg="blackAlpha.800"
        rounded="inherit"
        margin="-1px"
        border="0.3px solid rgba(98, 116, 110, 0.1)"
        backdropFilter="blur(2px)"
        p="36px 24px 24px 24px"
        transform="translate3d(0, 0, 15px)"
      >
        <Flex direction="column" h="full" align="center" justify="center" gap="8px">
          <Text fontSize="20px" textAlign="center">
            {title}
          </Text>
          {desc && (
            <Text textStyle="sub" fontSize="14px" lineHeight="tall">
              {desc}
            </Text>
          )}
        </Flex>
      </Box>
      <Box position="absolute" left="50%" transform="translate3d(-50%, 40px, 30px)">
        <BoxWithGradientBorder
          w="64px"
          h="64px"
          p="12px"
          borderSize={2}
          bg="grey.800"
          rounded="full"
          boxShadow="0px 3px 6px 2px rgba(0, 0, 0, 0.32), 0px 3px 5px 0px rgba(40, 41, 61, 0.08)"
        >
          <Image src={logoSrc} alt="feature" height={40} width={40} />
        </BoxWithGradientBorder>
      </Box>
    </BoxWithGradientBorder>
  );
};

export default CardFeature;
