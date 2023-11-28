import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import KyberAIPriceChart from "components/Shared/KyberAIPriceChart";
import KyberScoreChart from "components/Shared/KyberScoreChart";
import KyberScoreMeter, { calculateValueToColor } from "components/Shared/KyberScoreMeter";
import TokenLogo from "components/Shared/TokenLogo";
import BoxInViewMotion from "components/motion/BoxInViewMotion";
import ButtonWithAnimatedArrowUpRight from "components/motion/ButtonWithAnimatedArrowUpRight";
import { getTop3KyberAI } from "hooks/services";

export default async function KyberAITables() {
  const bullish = await getTop3KyberAI("bullish");
  const bearish = await getTop3KyberAI("bearish");

  return (
    <BoxInViewMotion>
      <Container>
        <Heading size="2xl" mb="60px" textAlign="center" className="inViewChild">
          Discover opportunities & threats with KyberAI Bullish & Bearish Ratings
        </Heading>
        <Box position="relative" w="full" h="328px" mb="40px" className="inViewChild">
          <Tabs
            position="relative"
            variant="unstyled"
            w="full"
            border="1px solid grey"
            rounded="20px"
            overflow="hidden"
          >
            <TabList display="flex">
              <Tab flex={1} _selected={{ bg: "greenAlpha.300" }}>
                Top Bullish Tokens
              </Tab>
              <Tab flex={1} _selected={{ bg: "greenAlpha.300" }}>
                Top Bearish Tokens
              </Tab>
              <Tab flex={1} _selected={{ bg: "greenAlpha.300" }}>
                Top Trending Tokens
              </Tab>
            </TabList>
            <TabIndicator mt="-1.5px" height="2px" bg="green.400" borderRadius="1px" />
            <TabPanels>
              <TabPanel p="0" m="0">
                <TableComponent data={bullish} key={0} />
              </TabPanel>
              <TabPanel p="0" m="0">
                <TableComponent data={bearish} key={1} />
              </TabPanel>
              <TabPanel p="0" m="0">
                <TableComponent data={bullish} key={2} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Center className="inViewChild">
          <ButtonWithAnimatedArrowUpRight
            size="lg"
            variant="secondary"
            as="a"
            href="https://kyberswap.com/KyberAI/About"
            target="_blank"
          >
            View More
          </ButtonWithAnimatedArrowUpRight>
        </Center>
      </Container>
    </BoxInViewMotion>
  );
}

const TableComponent = ({ data }: { data: any }) => {
  return (
    <TableContainer rounded="20px" borderTop="1px solid" borderColor="whiteAlpha.500" roundedTop="0">
      <Table>
        <Thead
          bg="greyAlpha.200"
          sx={{
            Th: {
              color: "whiteAlpha.600",
              fontSize: "12px",
              fontWeight: 500,
            },
          }}
        >
          <Tr>
            <Th>Token Name</Th>
            <Th>Kyberscore</Th>
            <Th>Last 72h Kyberscores</Th>
            <Th>Current price</Th>
            <Th>Last 7d price</Th>
          </Tr>
        </Thead>
        <Tbody bg="whiteAlpha.50" sx={{ Td: { fontSize: "14px", fontWeight: 400, borderColor: "whiteAlpha.500" } }}>
          <>
            {data?.map((item: any, index: number) => (
              <Tr key={index}>
                <Td>
                  <Flex align="center" gap="8px" fontSize="12px">
                    <TokenLogo src={item.logo} size={36} alt={item.name} />
                    <Text textTransform="uppercase">{item.symbol}</Text>
                    <Text textTransform="capitalize" textStyle="sub">
                      {item.name}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex align="center" direction="column" gap="2px">
                    <KyberScoreMeter value={item.kyberScore} />
                    <Text color={calculateValueToColor(item.kyberScore)} fontWeight={500}>
                      {item.kyberScoreTag}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <KyberScoreChart data={item.kyberScore3D} index={index} />
                </Td>
                <Td>
                  <Flex direction="column" align="flex-end">
                    <Text fontSize="14px">${item.price}</Text>
                    <Text fontSize="10px" color={item.priceChange24H >= 0 ? "green.400" : "red.400"}>
                      {item.priceChange24H.toFixed(2)}%
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <KyberAIPriceChart data={item.weekPrices} index={index} />
                </Td>
              </Tr>
            ))}
          </>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
