"use client";
import { Box } from "@chakra-ui/react";
import { stagger, useAnimate, useInView } from "framer-motion";
import { ReactNode, useEffect } from "react";

export default function BoxInViewMotion({ delay = 0, children }: { delay?: number; children: ReactNode }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "40px" });

  useEffect(() => {
    if (isInView) {
      try {
        animate(
          ".inViewChild",
          { opacity: 1, transform: "translateY(0px)" },
          { ease: [0.12, 0.33, 0.33, 1], duration: 0.8, delay: stagger(0.2, { startDelay: delay }) }
        );
      } catch (e) {
        console.log("Error: no valid child.");
      }
    }
  }, [isInView]);

  return (
    <Box ref={scope} sx={{ ".inViewChild": { opacity: 0, transform: "translateY(50px)" } }}>
      {children}
    </Box>
  );
}
