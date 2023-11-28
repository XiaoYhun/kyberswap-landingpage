"use client";
import { Box } from "@chakra-ui/react";
import { useMemo } from "react";
import { calculateValueToColor } from "./KyberScoreMeter";

export default function KyberScoreChart({
  width,
  height,
  data,
  index,
}: {
  width?: string;
  height?: string;
  data?: Array<any>;
  index: number;
}) {
  const filledData = useMemo(() => {
    if (!data || data.length === 0) return [];
    if (data.length === 19) {
      return data.slice(1, 19);
    }
    if (data.length === 18) {
      return data;
    }
    const datatemp = [];
    const startTimestamp = Math.floor(Date.now() / 14400000) * 14400;
    for (let i = 0; i < 18; i++) {
      const timestamp = startTimestamp - i * 14400;
      const index = data.findIndex((item) => item.createdAt === timestamp);
      if (index >= 0) {
        datatemp.push(data[index]);
      } else {
        datatemp.push(null);
      }
    }
    return datatemp.reverse();
  }, [data]);

  return (
    <Box h="28px" w="140px" style={{ width, height }}>
      <svg width="100%" height="100%" viewBox="0 0 100 22" preserveAspectRatio="none">
        <defs>
          <clipPath id={"cut-off-outline" + index}>
            {filledData?.map((item, index) => {
              const gap = 2;
              const rectWidth = (100 - (filledData.length - 1) * gap) / filledData.length;
              return <rect key={index} x={index * (rectWidth + gap)} y={0} width={rectWidth} height={21}></rect>;
            })}
          </clipPath>
        </defs>
        <g transform="scale(1,-1) translate(0,-21)" clipPath="url(#cut-off-outline)">
          {filledData?.map((item, index) => {
            const v = item?.kyberScore || 0;
            const gap = 2;
            const rectWidth = (100 - (filledData.length - 1) * gap) / filledData.length;
            const rectHeight = !v ? 21 : Math.max((v * 21) / 100, 0.8);
            const color = calculateValueToColor(v || 0);

            return (
              <rect
                key={v + index}
                x={index * (rectWidth + gap)}
                y={0}
                width={rectWidth}
                style={{ fill: !v ? "#222" : color }}
                strokeWidth={!v ? "1px" : 0}
                stroke={"#555"}
                vectorEffect="non-scaling-stroke"
                height={rectHeight}
              />
            );
          })}
        </g>
      </svg>
    </Box>
  );
}
