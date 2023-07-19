import React from "react";
import { styled } from "styled-components";
import { lightenOrDarken } from "../../constants";
import { Colors } from "../../types";
import { alpha } from "../../utils";

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
    cursor: "pointer",
    transition: "background-color 0.3s",

    color: disabled
      ? theme.palette.actions.disabled
      : variant === "text"
      ? mainColor
      : theme.palette.colors.text,

    backgroundColor: disabled
      ? theme.palette.actions.disabledBackground
      : variant === "text"
      ? "transparent"
      : mainColor,

    "&:hover:not(disabled)": {
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
