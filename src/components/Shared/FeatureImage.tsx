import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      position="relative"
      maxW="100vw"
      w={{ base: "343px", md: "427px" }}
      h={{ base: "280px", md: "320px" }}
      className="inViewChild"
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
    </Box>
  );
}
