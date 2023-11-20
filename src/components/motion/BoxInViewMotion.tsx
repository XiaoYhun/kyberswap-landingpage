"use client";
import { Box, HTMLChakraProps } from "@chakra-ui/react";
import { stagger, useAnimate, useInView } from "framer-motion";
import { ReactNode, useEffect } from "react";

export default function BoxInViewMotion({
  delay = 0,
  stagger: staggerDuration = 0.2,
  children,
  ...rest
}: { delay?: number; stagger?: number; children: ReactNode } & HTMLChakraProps<"div">) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "40px" });

  useEffect(() => {
    if (isInView) {
      try {
        animate(
          ".inViewChild",
          { opacity: 1, transform: "translateY(0px)" },
          { ease: [0.12, 0.33, 0.33, 1], duration: 0.8, delay: stagger(staggerDuration, { startDelay: delay }) }
        );
      } catch (e) {
        console.log("Error: no valid child.");
      }
    }
  }, [isInView]);

  return (
    <Box ref={scope} sx={{ ".inViewChild": { opacity: 0, transform: "translateY(50px)" } }} {...rest}>
      {children}
    </Box>
  );
}
