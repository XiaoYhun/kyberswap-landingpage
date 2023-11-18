"use client";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState, useMemo } from "react";
const stars = [
  "/assets/images/screen/star1.svg",
  "/assets/images/screen/star1.svg",
  "/assets/images/screen/star2.svg",
  "/assets/images/screen/star2.svg",
  "/assets/images/screen/star3.png",
  "/assets/images/screen/star4.png",
  "/assets/images/screen/star5.png",
  "/assets/images/screen/star6.png",
];
export default function Stars() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const resizeHandler = () => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);
      }
    };

    window?.addEventListener("resize", resizeHandler);
    return () => {
      window?.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const starsWithPosition = useMemo(() => {
    return stars.map((url) => {
      return {
        url,
        x: Math.random(),
        y: Math.random(),
        rotate: Math.random() * 360,
      };
    });
  }, []);

  return (
    <Box position="absolute" inset="0" zIndex={-1} maxW="100vw">
      <Box position="relative" h="100%" w="100%" ref={ref}>
        {!!width &&
          !!height &&
          starsWithPosition.map(({ url, x, y, rotate }, index) => {
            return (
              <motion.div
                key={index}
                style={{
                  x: x * width,
                  y: y * height,
                  rotate: `${rotate}deg`,
                  height: "24px",
                  width: "24px",
                }}
              >
                <Image src={url} height="24px" width="24px" />
              </motion.div>
            );
          })}
      </Box>
    </Box>
  );
}
