import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function TokenLogo({ size, src, alt }: { size?: number; src: string; alt: string }) {
  return (
    <Box
      rounded="full"
      h={size ? size + "px" : "24px"}
      w={size ? size + "px" : "24px"}
      position="relative"
      overflow="hidden"
    >
      <Image src={src} fill alt={alt} />
    </Box>
  );
}
