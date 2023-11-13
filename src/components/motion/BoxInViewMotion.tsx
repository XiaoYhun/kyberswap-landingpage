"use client";
import { Box } from "@chakra-ui/react";
import { stagger, useAnimate, useInView } from "framer-motion";
import { ReactNode, useEffect } from "react";

export default function BoxInViewMotion({ delay = 0, children }: { delay?: number; children: ReactNode }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: "all" });

  useEffect(() => {
    if (isInView) {
      animate(
        ".inViewChild",
        { opacity: 1, transform: "translateY(0px)" },
        { ease: [0.12, 0.55, 0.55, 1], duration: 1, delay: stagger(0.1, { startDelay: delay }) }
      );
    }
  }, [isInView]);

  return (
    <Box ref={scope} sx={{ ".inViewChild": { opacity: 0, transform: "translateY(35px)" } }}>
      {children}
    </Box>
  );
}
