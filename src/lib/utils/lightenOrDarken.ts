import tinycolor from "tinycolor2";

const lightenOrDarken = (color: string) => {
  const tinyColor = tinycolor(color);
  if (tinyColor.isLight()) {
    return tinyColor.darken(20).toString();
  } else {
    return tinyColor.lighten(20).toString();
  }
};

export { lightenOrDarken };
