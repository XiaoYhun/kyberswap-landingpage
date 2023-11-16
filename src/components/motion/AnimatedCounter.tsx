"use client";
import { Box } from "@chakra-ui/react";
import { MotionValue, motion, useMotionValue, useTransform, animate, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCounter({ value = 213, fontSize = 24 }: { value?: number; fontSize: number }) {
  const n = useMotionValue(0);

  useEffect(() => {
    const animation = animate(n, value, {
      type: "spring",
      damping: 70,
      mass: 10,
      bounce: 0,
      restSpeed: 0.0001,
      restDelta: 0.1,
    });
    return animation.stop;
  }, [value]);

  return (
    <>
      <motion.div style={{ marginLeft: "200px" }}>{n}</motion.div>
      <motion.div
        style={{
          marginLeft: "100px",
          display: "flex",
          gap: `${(2 * fontSize) / 5}px`,
          color: "white",
          height: `${fontSize}px`,
          overflow: "hidden",
        }}
      >
        <CounterNumber number={n} divide={100} fontSize={fontSize} />
        <span style={{ width: `${fontSize / 6}px`, marginRight: `-${(2 * fontSize) / 5}px` }}>.</span>
        <CounterNumber number={n} divide={10} fontSize={fontSize} />
        <CounterNumber number={n} fontSize={fontSize} />
      </motion.div>
    </>
  );
}

const CounterNumber = ({
  number,
  divide = 1,
  fontSize,
}: {
  number: MotionValue<number>;
  fontSize: number;
  divide?: number;
}) => {
  const transformedNum = useTransform(number, (latest) => {
    const valueToStartAnimate = 1 - 1 / divide;
    if ((latest / divide) % 1 < valueToStartAnimate) return Math.floor(latest / divide);
    return Math.floor(latest / divide) + (((latest / divide) % 1) - valueToStartAnimate) * divide;
  });
  const spring = useSpring(transformedNum, { stiffness: 500, damping: 20 });
  return (
    <Box position="relative" sx={{ span: { position: "absolute", width: "10px", textAlign: "center" } }}>
      {[...Array(10)].map((_, index) => (
        <Number key={index} number={9 - index} value={spring} fontSize={fontSize} />
      ))}
    </Box>
  );
};
const Number = ({ number, value, fontSize }: { number: number; value: MotionValue<number>; fontSize: number }) => {
  const y = useTransform(value, (latest) => {
    const height = fontSize;
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
