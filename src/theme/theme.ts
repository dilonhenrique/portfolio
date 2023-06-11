import { typography } from "./defaults/typography";
import { colors } from "./defaults/colors";
import { breakpoints } from "./defaults/breakpoints";

const theme = {
  typography,
  colors,
  breakpoints,
};

export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;
export type ThemeColors = keyof typeof colors;
export type ThemeBreakpoints = keyof typeof breakpoints;

export default theme;