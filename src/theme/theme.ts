import { typography } from "./defaults/typography";
import { darkColors, lightColors } from "./defaults/colors";
import { breakpoints } from "./defaults/breakpoints";

export const lightTheme = {
  typography,
  colors: lightColors,
  breakpoints,
};

export const darkTheme = {
  typography,
  colors: darkColors,
  breakpoints,
};

export type Theme = typeof lightTheme;
export type ThemeTypographyVariants = keyof typeof typography.variants;
export type ThemeColors = keyof typeof lightColors;
export type ThemeBreakpoints = keyof typeof breakpoints;