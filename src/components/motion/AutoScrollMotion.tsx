"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useEffect, ReactNode, useRef, useState } from "react";
export default function AutoScrollMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [clientWidth, setClientWidth] = useState(0);
  const baseX = useMotionValue(0);
  const velocity = useMotionValue(0);
  const smoothVelocity = useSpring(velocity, {
    damping: 200,
    stiffness: 400,
  });
  const x = useTransform(baseX, (v) => `${wrap(-1 * (clientWidth / 4), -2 * (clientWidth / 4), v)}px`);

  useAnimationFrame((t, delta) => {
    let moveBy = smoothVelocity.get() * (delta / 1000);
    baseX.set(baseX.get() - moveBy);
  });

  useEffect(() => {
    setClientWidth(ref.current?.scrollWidth || 0);
    velocity.set(15);
  }, []);

  return (
    <motion.div ref={ref} style={{ x }} onHoverStart={() => velocity.set(0)} onHoverEnd={() => velocity.set(0)}>
      <>{children}</>
      <>{children}</>
      <>{children}</>
      <>{children}</>
    </motion.div>
  );
}
