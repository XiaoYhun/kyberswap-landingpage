"use client";
import { Box, HTMLChakraProps } from "@chakra-ui/react";
import React, { useRef, useState, useEffect, PropsWithChildren } from "react";
import useMousePosition from "utils/mouse-position";

type HighlightGroupProps = {
  className?: string;
  refresh?: boolean;
};

export const HighlightGroup: React.FC<HighlightGroupProps & HTMLChakraProps<"div">> = ({
  children,
  refresh = false,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    containerRef.current && setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement));
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);

    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [setBoxes]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

  useEffect(() => {
    initContainer();
  }, [refresh]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        });
      }
    }
  };

  return (
    <Box ref={containerRef} role="group" {...rest}>
      {children}
    </Box>
  );
};

type HighlighterItemProps = {
  opacity?: number;
  children: React.ReactNode;
};

export const HighlighterItem: React.FC<PropsWithChildren<HighlighterItemProps>> = ({ opacity = 1, children }) => {
  return (
    <Box
      position="relative"
      rounded="xl"
      overflow="hidden"
      userSelect="none"
      sx={{
        _before: {
          content: "''",
          position: "absolute",
          w: 96,
          h: 96,
          left: -48,
          top: -48,
          bg: "green.500",
          rounded: "full",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 1s",
          transform: "translate(var(--mouse-x),var(--mouse-y))",
          zIndex: -30,
          filter: "blur(100px)",
        },
        _after: {
          content: "''",
          position: "absolute",
          inset: 0,
          rounded: "inherit",
          opacity: 0,
          transition: "opacity 1s",
          height: "80px",
          width: "80px",
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          bg: "radial-gradient(circle closest-side, #ffffff40, transparent)",
          transform: "translate(-50%,-50%)",
          zIndex: -10,
        },
        _groupHover: {
          _after: { opacity: 0.4 * opacity },
          _before: { opacity: 0.2 * opacity },
        },
      }}
    >
      {children}
    </Box>
  );
};
