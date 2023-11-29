import type { Metadata } from "next";

import { Providers } from "./Providers";
import Header from "components/Header";
import Footer from "components/Footer";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: { default: "KyberSwap - Trading Smart", template: "%s | KyberSwap - Trading Smart" },
  description:
    "KyberSwap is DeFi’s first Dynamic Market Maker; a decentralized exchange protocol that provides frictionless crypto liquidity with extremely high flexibility and capital efficiency. KyberSwap is the first major protocol in Kyber’s liquidity hub.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Box as="main" minH="100vh" position="relative" zIndex={1}>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
