import tinycolor from "tinycolor2";

const alpha = (color: string, alpha: number): string => {
  const tinyColor = tinycolor(color);
  tinyColor.setAlpha(alpha)
  return tinyColor.toString();
};

export { alpha };
