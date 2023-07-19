import React from "react";
import { styled } from "styled-components";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "text" | "contained";
};

const StyledButton = styled("button")<Props>(({ theme, variant }) => ({
  fontWeight: "bold",
  border: "none",
  textDecoration: "none",
  borderRadius: "10px",
  padding: "6px",
  cursor: "pointer",
  color:
    variant === "text"
      ? theme.palette.colors.primary
      : theme.palette.colors.text,
  backgroundColor:
    variant === "text" ? "transparent" : theme.palette.colors.primary,
}));

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <StyledButton ref={ref} {...props} />;
});

export default Button;
