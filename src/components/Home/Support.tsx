import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Support() {
  return (
    <Flex>
      <Box flex={4}>
        <Box w="320px" h="320px" position="relative">
          <Image src="/assets/images/support.png" alt="support 247" fill />
        </Box>
      </Box>
      <Box flex={6}>
        <Flex direction="column" gap="16px">
          <Heading size="2xl" lineHeight="normal">
            Always Here for You: <br /> 24/7 Customer Support
          </Heading>
          <Text lineHeight="tall" color="whiteAlpha.600">
            Our dedicated team of experts are available 24 hours a day to assist you with any queries, concerns, or
            technical issues you might encounter.
          </Text>
          <Stack direction="row" gap="16px" mt="16px">
            <Button variant="outline" rounded="2xl" padding="16px 24px">
              Contact Suppport
            </Button>
            <Button variant="outline" rounded="2xl" padding="16px 24px">
              View Docs
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
