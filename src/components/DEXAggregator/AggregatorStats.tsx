import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

export default function AggregatorStats() {
  return (
    <BoxInViewMotion>
      <Container transform="translateY(-50%)">
        <Box
          bg="grey.900"
          p="24px 0"
          borderRadius="3xl"
          backgroundClip="padding-box"
          border="1px solid transparent"
          _before={{
            content: "''",
            position: "absolute",
            inset: 0,
            zIndex: -1,
            margin: "-1px",
            backgroundImage: "linear-gradient(to left top,#4b1f64, #4b947e)",
            borderRadius: "inherit",
          }}
        >
          <Flex align="center" justify="center">
            <Flex direction="column" flex={1} align="center">
              <Text fontSize="36px" lineHeight="tall" className="inViewChild">
                $3.7B
              </Text>
              <Text textStyle="sub" className="inViewChild">
                Total Volume
              </Text>
            </Flex>
            <Divider orientation="vertical" height="24px" borderColor="greyAlpha.400" />
            <Flex direction="column" flex={1} align="center">
              <Text fontSize="36px" lineHeight="tall" className="inViewChild">
                5,267,769
              </Text>
              <Text textStyle="sub" className="inViewChild">
                Total Transactions
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </BoxInViewMotion>
  );
}
