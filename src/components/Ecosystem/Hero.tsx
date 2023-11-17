"use client";

import { Box, Button, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";

export default function Hero() {
  return (
    <BoxInViewMotion>
      <Container>
        <Spacer h="100px" />
        <Flex align="center">
          <Flex flex={5} direction="column" gap="16px">
            <Text className="inViewChild">Ecosystem</Text>
            <Heading size="2xl" className="inViewChild">
              KyberSwap Ecosystem
            </Heading>
            <Text color="whiteAlpha.600" fontWeight="normal" className="inViewChild">
              Explore the KyberSwap ecosystem of partners, integrations and stakeholders.
            </Text>
            <Text color="whiteAlpha.600" fontWeight="normal" className="inViewChild">
              We have a growing network of over 100 dApps building on top of our protocols to offer users superior rates
              and higher earnings!
            </Text>
            <Flex gap="24px" mt="16px">
              <Button
                variant="outline"
                p="16px 24px"
                rounded="2xl"
                as="a"
                href="https://forms.gle/ouU3WrwrxESfaVRe8"
                target="_blank"
                className="inViewChild"
              >
                Business Enquiries
              </Button>
              <ButtonWithAnimatedArrowUpRight variant="outline" p="16px 24px" rounded="2xl" className="inViewChild">
                Docs
              </ButtonWithAnimatedArrowUpRight>
            </Flex>
          </Flex>
          <Box flex={4} w="480px" h="440px" position="relative" className="inViewChild" pointerEvents="none">
            <Spacer />
          </Box>
        </Flex>
        <Spacer h="100px" />
      </Container>
    </BoxInViewMotion>
  );
}
