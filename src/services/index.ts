export async function getBanners() {
  const res = await fetch("https://common-service.dev.kyberengineering.io/api/v1/banners");
  const data = await res.json();
  return data?.data?.banners;
}

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

export async function getTopFarms() {
  const res = await fetch(
    "https://pool-farm.dev.kyberengineering.io/all-chain/api/v1/farm-pools?chainNames=arbitrum,bsc,ethereum,optimism,polygon&page=1&perPage=3&sortBy=tvl&sortType=desc"
  );
  const data = await res.json();

  return data?.data?.farmPools || [];
}
export async function getTokens() {
  const res = await fetch("https://ks-setting.kyberswap.com/api/v1/tokens?page=1&pageSize=100&isWhitelisted=true");
  const data = await res.json();

  const pages = Math.ceil(data?.data?.pagination.totalItems / 100) - 1;

  const datas = await Promise.all(
    new Array(pages).map(async (_, index) => {
      const res = await fetch(
        `https://ks-setting.kyberswap.com/api/v1/tokens?page=${index + 2}&pageSize=100&isWhitelisted=true`
      );
      const data = await res.json();
      console.log("🚀 ~ file: index.ts:49 ~ newArray ~ data:", data);
      return data?.data?.tokens;
    })
  );

  console.log("🚀 ~ file: index.ts:40 ~ getTokens ~ data:", datas);

  return data?.data?.tokens || [];
}

export async function getTop3KyberAI(type: "bullish" | "bearish" | "trending") {
  try {
    const res = await fetch("https://common-service.dev.kyberengineering.io/api/v1/assets/" + type);
    const data = await res.json();
    return data?.data?.assets || [];
  } catch {
    return [];
  }
}
