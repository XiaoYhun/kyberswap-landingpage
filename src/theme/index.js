import { cssVar, extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./foundations/colors";
import Button from "./components/button";
import { Work_Sans } from "next/font/google";
const workSans = Work_Sans({ subsets: ["latin"] });
const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const theme = extendTheme({
  styles: styles,
  colors: colors,
  fonts: {
    heading: workSans.style.fontFamily,
    body: workSans.style.fontFamily,
  },
  radii: {
    "2xl": "20px",
  },
  textStyles: {
    sub: {
      color: "whiteAlpha.600",
      fontWeight: "normal",
    },
  },
  components: {
    Button: Button,
    Text: {
      varitants: {
        subText: {
          color: "whiteAlpha.600",
          fontWeight: "normal",
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "1024px",
        padding: ["0px 16px", null, "0"],
      },
    },
    Flex: {
      baseStyle: {
        alignItems: "center",
      },
    },
    Link: {
      baseStyle: { color: "green.400", _hover: { color: "green.600", textDecoration: "none" } },
    },
    Badge: {
      baseStyle: {
        rounded: "full",
        textTransform: "none",
        p: "4px 8px",
        fontSize: "xs",
        fontWeight: "normal",
      },
      variants: {
        secondary: {
          color: "green.400",
          bg: "greenAlpha.200",
        },
      },
    },
    Tooltip: {
      baseStyle: {
        p: "6px 12px",
        bg: "grey.800",
        rounded: "lg",
        "--popper-arrow-bg": "var(--chakra-colors-grey-800)",
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "semibold",
      },
      sizes: {
        "2xl": {
          fontSize: ["28px", "36px", "48px"],
          lineHeight: 1.2,
        },
      },
    },
    Skeleton: {
      baseStyle: {
        rounded: "full",
        [$startColor.variable]: "colors.whiteAlpha.100", //changing startColor to red.100
        [$endColor.variable]: "colors.whiteAlpha.400",
      },
    },
  },
});
export default theme;
