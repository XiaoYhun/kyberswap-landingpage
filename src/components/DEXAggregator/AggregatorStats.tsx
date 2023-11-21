import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import BoxWithGradientBorder from "components/Shared/BoxWithGradientBorder";
import BoxInViewMotion from "components/motion/BoxInViewMotion";

export default function AggregatorStats() {
  return (
    <BoxInViewMotion>
      <Container transform="translateY(-50%)">
        <Box className="inViewChild">
          <BoxWithGradientBorder
            borderSize={1}
            bg="grey.900"
            p="24px 0"
            boxShadow="xl"
            borderRadius="3xl"
            borderGradient="linear-gradient(to left top,#4b1f64, #4b947e)"
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
          </BoxWithGradientBorder>
        </Box>
      </Container>
    </BoxInViewMotion>
  );
}
