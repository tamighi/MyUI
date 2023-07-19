import tinycolor from "tinycolor2";

const applyHoverColor = (color: string, hoverIntensity: number) => {
  const tinyColor = tinycolor(color);
  if (tinyColor.isLight()) {
    return tinyColor.darken(hoverIntensity).toString();
  } else {
    return tinyColor.lighten(hoverIntensity).toString();
  }
};

export { applyHoverColor };
