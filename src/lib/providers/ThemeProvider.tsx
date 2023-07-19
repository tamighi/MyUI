import React from "react";

import { lightTheme } from "../constants";
import { Theme } from "../types";
import { ThemeContext, ThemeProvider } from "styled-components";

const useTheme = () => {
  return React.useContext(ThemeContext) || lightTheme;
};

const CustomThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: Theme;
}) => {
  return <ThemeProvider theme={theme || lightTheme}>{children}</ThemeProvider>;
};

export { useTheme, CustomThemeProvider as ThemeProvider };
