export async function getChainsConfig() {
  const res = await fetch("https://ks-setting.kyberswap.com/api/v1/configurations/fetch?serviceCode=chains");
  const data = await res.json();
  return data.data.config;
}

export async function getDaoInfo() {
  const res = await fetch("https://kyberswap-dao-stats.kyberengineering.io/dao-info");
  const data = await res.json();
  return data.data;
}

export async function getDaoRewardStats() {
  const res = await fetch("https://kyberswap-dao-stats.kyberengineering.io/api/v1/reward-stats");
  const data = await res.json();
  return data.data.rewardStats;
}

export async function getKNCPrice() {
  const res = await fetch("https://price.kyberswap.com/ethereum/api/v1/prices", {
    method: "POST",
    body: JSON.stringify({ ids: "0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202" }),
  });
  const data = await res.json();

  return data?.data?.prices[0]?.marketPrice || 0;
}
