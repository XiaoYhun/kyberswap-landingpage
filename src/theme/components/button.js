const Button = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
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
      backdropFilter: "blur(12px)",
      _hover: { bg: "greyAlpha.100" },
      _active: { bg: "greyAlpha.200" },
    },
  },
};

export default Button;
