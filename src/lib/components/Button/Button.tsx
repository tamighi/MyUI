import React from "react";

import { styled } from "styled-components";
import { lightTheme } from "../../constants";
import { Colors } from "../../types";
import { alpha, applyHoverColor } from "../../utils";

const StyledButton = styled("button")<Props>(({
  theme,
  variant = "text",
  disabled,
  variantColor = "primary",
}) => {
  // If no theme is provided, fallback to the lightTheme
  if (Object.keys(theme).length === 0) {
    theme = lightTheme;
  }

  const { actions, colors } = theme.palette;

  const mainColor = theme.palette.colors[variantColor];

  return {
    fontWeight: "bold",
    border: "none",
    textDecoration: "none",
    borderRadius: "10px",
    padding: "6px",
    cursor: disabled ? "not-allowed" : "pointer",

    transition: `${
      theme.transition ? `${theme.transition}, ` : ""
    }background-color 0.3s`,

    color: disabled
      ? actions.disabled
      : variant === "text"
      ? mainColor
      : colors.text,

    backgroundColor:
      variant === "text"
        ? "transparent"
        : disabled
        ? actions.disabledBackground
        : mainColor,

    "&:hover:not(:disabled)": {
      backgroundColor:
        variant === "text"
          ? alpha(mainColor, actions.hoverAlpha)
          : applyHoverColor(mainColor, actions.hoverIntensity),
    },
  };
});

/**
 * Button component props.
 * Inherits all the properties of a regular HTML button element.
 */
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Button style variant: "text" or "contained" */
  variant?: "text" | "contained";
  /** Color variant for the button */
  variantColor?: keyof Colors;
};

/**
 * Button component.
 * @param variant - Button style variant (default: "text").
 * @param variantColor - Color variant for the button (default: "primary").
 */
const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

export default Button;
