import { Theme } from "../types";

const lightTheme: Theme = {
  palette: {
    mode: "light",
    colors: {
      primary: "#1976D2",
      secondary: "#E91E63",
      surface: "#ffffff",
      text: "black",
    },
    actions: {
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      hoverAlpha: 0.12,
    },
  },
  transition: undefined,
} as const;

const darkTheme: Theme = {
  palette: {
    mode: "light",
    colors: {
      primary: "#393053",
      secondary: "#144272",
      surface: "#202121",
      text: "white",
    },
    actions: {
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      hoverAlpha: 0.08,
    },
  },
  transition: undefined,
} as const;

export { lightTheme, darkTheme };
