export async function getChainsConfig() {
  const res = await fetch("https://ks-setting.kyberswap.com/api/v1/configurations/fetch?serviceCode=chains");
  const data = await res.json();
  return data.data.config;
}
