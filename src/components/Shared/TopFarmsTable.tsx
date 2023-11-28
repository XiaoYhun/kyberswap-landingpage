import { Badge, Box, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import TokenLogo from "./TokenLogo";
import MoneyBag from "components/SVG/MoneyBag";
import { getTokens, getTopFarms } from "hooks/services";

export default async function TopFarmsTable() {
  const farms = await getTopFarms();
  const tokens = await getTokens();

  return (
    <TableContainer rounded="20px" border="1px solid" borderColor="whiteAlpha.500">
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
            <Th>Token Pair</Th>
            <Th>Staked Liquidity</Th>
            <Th isNumeric>APR</Th>
          </Tr>
        </Thead>
        <Tbody bg="whiteAlpha.50" sx={{ Td: { fontSize: "14px", fontWeight: 400, borderColor: "whiteAlpha.500" } }}>
          <>
            {farms.map((farm: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td>
                    <Flex gap="12px" align="center">
                      <Flex>
                        <TokenLogo
                          src="https://raw.githubusercontent.com/KyberNetwork/kyberswap-interface/develop/src/assets/images/KNC.svg"
                          alt="KNC logo"
                          size={36}
                        />
                        <Box marginLeft="-6px" border="1px solid" borderColor="grey.800" rounded="full" zIndex={1}>
                          <TokenLogo
                            src="https://raw.githubusercontent.com/KyberNetwork/kyberswap-interface/develop/src/assets/images/KNC.svg"
                            alt="KNC logo"
                            size={36}
                          />
                        </Box>
                        <Box
                          alignSelf="flex-end"
                          marginLeft="-8px"
                          border="1px solid"
                          borderColor="grey.800"
                          rounded="full"
                          zIndex={2}
                        >
                          <TokenLogo
                            src="https://raw.githubusercontent.com/KyberNetwork/kyberswap-interface/develop/src/assets/images/KNC.svg"
                            alt="KNC logo"
                            size={20}
                          />
                        </Box>
                      </Flex>
                      <Flex direction="column" gap="4px">
                        <Text>SIPHER - ETH</Text>
                        <Flex gap="4px">
                          <Badge fontSize="10px" lineHeight="16px" variant="secondary" p="0px 4px">
                            Dynamic
                          </Badge>
                          <Badge
                            fontSize="10px"
                            lineHeight="16px"
                            variant="secondary"
                            color="white"
                            bg="whiteAlpha.300"
                            p="0px 4px"
                          >
                            Fee {(farm.pool.fee || 0) / 1000}%
                          </Badge>
                          <Badge variant="secondary" p="2px 4px">
                            <MoneyBag />
                          </Badge>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>${parseFloat(parseFloat(farm.stakedTvl).toFixed(2)).toLocaleString()}</Td>
                  <Td isNumeric>{parseFloat(farm.apr).toFixed(2)}%</Td>
                </Tr>
              );
            })}
          </>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
