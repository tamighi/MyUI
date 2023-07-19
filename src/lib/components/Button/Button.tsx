import React from "react";
import { styled } from "styled-components";
import { Colors } from "../../types";
import { alpha, lightenOrDarken } from "../../utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "text" | "contained";
  color?: keyof Colors;
};

const StyledButton = styled("button")<Props>(({
  theme,
  variant = "text",
  disabled,
  color = "primary",
}) => {
  const mainColor = theme.palette.colors[color];
  return {
    fontWeight: "bold",
    border: "none",
    textDecoration: "none",
    borderRadius: "10px",
    padding: "6px",

    transition: `${
      theme.transition ? `${theme.transition}, ` : ""
    }background-color 0.3s`,

    color: disabled
      ? theme.palette.actions.disabled
      : variant === "text"
      ? mainColor
      : theme.palette.colors.text,

    backgroundColor:
      variant === "text"
        ? "transparent"
        : disabled
        ? theme.palette.actions.disabledBackground
        : mainColor,

    "&:hover:not(:disabled)": {
      cursor: "pointer",
      backgroundColor:
        variant === "text"
          ? alpha(mainColor, theme.palette.actions.hoverAlpha)
          : lightenOrDarken(mainColor),
    },
  };
});

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <StyledButton ref={ref} {...props} />;
});

export default Button;
