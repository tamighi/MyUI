type Colors = {
  primary: string;
  secondary: string;
  surface: string;
  text: string;
};

type Actions = {
  disabled: string;
  disabledBackground: string;
  hoverImage: string;
};

type Palette = {
  mode: "dark" | "light";
  colors: Colors;
  actions: Actions;
};

type Theme = {
  palette: Palette;
  transition?: string;
};

export type { Colors, Actions, Palette, Theme };
