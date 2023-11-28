import { Box, HTMLChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function BoxWithGradientBorder({
  children,
  borderSize = 1,
  borderGradient = "linear-gradient(to left top,#4b1f64, #4b947e)",
  ...rest
}: { children?: ReactNode; borderSize?: number; borderGradient?: string } & HTMLChakraProps<"div">) {
  return (
    <Box
      h="full"
      w="full"
      position="relative"
      _before={{
        content: "''",
        position: "absolute",
        inset: 0,
        margin: `-${borderSize}px`,
        backgroundImage: borderGradient,
        rounded: "inherit",
        zIndex: -1,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
