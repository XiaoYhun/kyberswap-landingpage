const Button = {
  baseStyle: {
    fontWeight: "medium",
    color: "black",
    borderRadius: "99px",
    p: "0.5rem 1rem",
  },
  variants: {
    solid: {
      color: "black",
      fontWeight: "medium",
    },
    secondary: {
      color: "green.400",
      bg: "greenAlpha.200",
      h: "fit-content",
      _hover: { bg: "greenAlpha.300" },
      _active: { bg: "greenAlpha.400" },
    },
    outline: {
      color: "white",
      bg: "greyAlpha.50",
      borderWidth: "1px",
      borderColor: "greyAlpha.200",
      h: "fit-content",
      _hover: { bg: "greyAlpha.200" },
      _active: { bg: "greyAlpha.300" },
    },
  },
};

export default Button;