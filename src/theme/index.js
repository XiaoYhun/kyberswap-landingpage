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
      },
    },
    Flex: {
      baseStyle: {
        align: "center",
      },
    },
  },
});
export default theme;
