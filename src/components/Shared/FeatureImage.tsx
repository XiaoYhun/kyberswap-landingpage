import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function FeatureImage({ src, alt, objectFit }: { src: string; alt: string; objectFit?: any }) {
  return (
    <Box
      position="relative"
      maxW="100vw"
      w={{ base: "343px", md: "427px" }}
      h={{ base: "280px", md: "320px" }}
      className="inViewChild"
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: objectFit || "contain", overflow: "visible" }}
        quality={100}
      />
    </Box>
  );
}
