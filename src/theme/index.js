import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./foundations/colors";
import Button from "./components/button";
const theme = extendTheme({
  styles: styles,
  colors: colors,
  components: {
    Button: Button,
    Container: {
      baseStyle: {
        maxW: "1024px",
        padding: "0",
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
  },
});
export default theme;