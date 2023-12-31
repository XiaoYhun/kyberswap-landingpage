import { Box, Container, Center, Spacer } from "@chakra-ui/react";
import FirstToKnow from "components/Home/FirstToKnow";
import Hero from "components/Home/Hero";
import KyberDAO from "components/Home/KyberDAO";
import Platform from "components/Home/Platforms";
import Security from "components/Home/Security";
import Stars from "components/Home/Stars";
import Support from "components/Home/Support";
import Wallets from "components/Home/Wallets";
import dynamic from "next/dynamic";
import { getBanners } from "services";

const BannerCarousel = dynamic(() => import("components/Home/BannerCarousel"), {
  ssr: false,
});
const Solutions = dynamic(() => import("components/Home/Solutions"), {
  ssr: false,
});

export default async function Home() {
  const banners = await getBanners();

  return (
    <>
      <Box
        as="video"
        playsInline
        autoPlay
        muted
        loop
        opacity={0.5}
        position="absolute"
        top="0"
        left="0"
        right="0"
        zIndex={-1}
        width="100%"
        height={{ base: "1200px", md: "900px" }}
        objectFit="cover"
      >
        <source src="/assets/videos/reverse.mp4" type="video/webm"></source>
      </Box>
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Hero />
      <Spacer height={{ base: "100px", md: "160px" }} />
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Container>
          <Spacer height={{ base: "50px", md: "100px" }} />
          <Center mt={{ base: "0", md: "-180px" }}>
            <BannerCarousel banners={banners} />
          </Center>
          <Spacer height={{ base: "60px", md: "200px" }} />
          <Platform />
          <Spacer height={{ base: "60px", md: "200px" }} />
          <Solutions />
          <Spacer height={{ base: "60px", md: "200px" }} />
          <KyberDAO />
          <Spacer height={{ base: "60px", md: "200px" }} />
        </Container>
      </Box>
      <Box bg="linear-gradient(180deg, #0A1C23 0%, #0F0F0F 100%)">
        <Container>
          <Spacer height={{ base: "60px", md: "200px" }} />
          <Security />
          <Spacer height={{ base: "60px", md: "200px" }} />
          <Wallets />
          <Spacer height={{ base: "60px", md: "200px" }} />
          <Support />
          <Spacer height={{ base: "60px", md: "200px" }} />
        </Container>
        <Stars />
      </Box>
      <Box
        position="relative"
        bg="conic-gradient(from 180deg, rgba(75, 70, 229, 0.20) 40deg, rgba(110, 231, 195, 0.20) 120deg, rgba(4, 143, 137, 0.20) 240deg,rgba(75, 70, 229, 0.20) 360deg)"
      >
        <Container>
          <Spacer height={{ base: "60px", md: "200px" }} />
          <FirstToKnow />
          <Spacer height={{ base: "60px", md: "200px" }} />
        </Container>
        <Stars />
      </Box>
    </>
  );
}
