"use client";
import { Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { motion, useTime, useTransform } from "framer-motion";
import crystal1 from "assets/images/crystals/crystals-1.png";
import crystal2 from "assets/images/crystals/crystals-2.png";
import crystal3 from "assets/images/crystals/crystals-3.png";
import crystal4 from "assets/images/crystals/crystals-4.png";
import crystal5 from "assets/images/crystals/crystals-5.png";
import { useState } from "react";
export default function CrystalsBackground() {
  return (
    <>
      <Box
        w="full"
        position="absolute"
        inset="0"
        h="full"
        bg={`url(/assets/images/background.png)`}
        bgPos="bottom"
        bgSize="cover"
        bgColor="grey.800"
        opacity="0.15"
        zIndex={-1}
      />
      <Box w="full" position="absolute" left="0" right="0" top="0" h={"700px"}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 2.5, type: "ease" }}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <FloatingImage src={crystal1} right="25%" bottom="14%" />
          <FloatingImage src={crystal2} right="50%" top="30%" />
          <FloatingImage src={crystal3} right="22%" top="20%" />
          <FloatingImage src={crystal4} left="23%" bottom="16%" />
          <FloatingImage src={crystal5} left="25%" top="20%" />
        </motion.div>
      </Box>
    </>
  );
}

const FloatingImage = ({
  src,
  left,
  top,
  right,
  bottom,
}: {
  src: StaticImageData;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
}) => {
  const [rotateSpeed] = useState(Math.random() * 2 - 1);

  const time = useTime();
  const rotate = useTransform(time, [0, 30_000], [0, 360 * rotateSpeed], { clamp: false });

  return (
    <Box position="absolute" left={left} top={top} right={right} bottom={bottom} w="fit-content" h="fit-content">
      <motion.div style={{ rotate }}>
        <Image src={src} alt="crystal" />
      </motion.div>
    </Box>
  );
};
