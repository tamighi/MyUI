const alpha = (color: string, alpha: number): string => {
  const sanitizedColor = color.trim().toLowerCase();

  let convertedColor = sanitizedColor;

  if (sanitizedColor.startsWith("#")) {
    const hexValue = sanitizedColor.substring(1);
    const rgbaColor = `rgba(${parseInt(
      hexValue.substring(0, 2),
      16
    )}, ${parseInt(hexValue.substring(2, 4), 16)}, ${parseInt(
      hexValue.substring(4, 6),
      16
    )}, 1)`;
    convertedColor = rgbaColor;
  }

  if (
    sanitizedColor.startsWith("rgb") &&
    sanitizedColor.includes("(") &&
    sanitizedColor.includes(")")
  ) {
    const startIndex = sanitizedColor.indexOf("(") + 1;
    const endIndex = sanitizedColor.indexOf(")");
    const colorValues = sanitizedColor
      .substring(startIndex, endIndex)
      .split(",");

    const rgbAlpha =
      colorValues.length === 4 ? parseFloat(colorValues[3].trim()) : 1;

    const rgbaColor = `rgba(${colorValues[0].trim()}, ${colorValues[1].trim()}, ${colorValues[2].trim()}, ${rgbAlpha})`;
    convertedColor = rgbaColor;
  }

  const rgbaWithAlpha = convertedColor.replace(/[^,]+(?=\))/, alpha.toString());

  return rgbaWithAlpha;
};

export { alpha }
