"use client";
import { Flex } from "@chakra-ui/react";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCounter() {
  return (
    <motion.div style={{ color: "white", border: "1px solid white", height: "24px" }}>
      <CounterNumber />
    </motion.div>
  );
}

const CounterNumber = () => {
  const number = useSpring(0, { velocity: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      number.get() === 0 ? number.set(100) : number.set(0);
    }, 2000);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);
  return (
    <Flex position="relative" sx={{ span: { position: "absolute" } }}>
      {[...Array(10)].map((_, index) => (
        <Number key={index} number={9 - index} value={number} />
      ))}
    </Flex>
  );
};
const Number = ({ number, value }: { number: number; value: MotionValue<number> }) => {
  const y = useTransform(value, (latest) => {
    const height = 24;
    const divide = Math.floor(latest / 10);
    const mod = (latest % 10) - number;
    if (mod > 5) {
      return (mod - 10) * height;
    }
    if (mod < -5) {
      return (mod + 10) * height;
    }
    return mod * height;
  });
  return (
    <motion.span style={{ y }} transition={{ type: "spring" }}>
      {number}
    </motion.span>
  );
};
