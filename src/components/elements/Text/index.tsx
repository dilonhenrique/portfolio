import React from 'react';
import { Theme, ThemeColors, ThemeTypographyVariants } from '@/theme/theme';
import { StyleSheet } from '@/theme/StyleSheet';
import { BaseComponent } from '@/theme/BaseComponent';
import { DefaultTheme, css, styled, useTheme } from 'styled-components';
import { getVariantFromTheme } from '@/theme/parseCss';

interface TextProps {
  children?: React.ReactNode;
  theme?: Theme;
  as?: 'span' | 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a' | any;
  color?: ThemeColors;
  variant?: ThemeTypographyVariants;
  href?: string;
  style?: React.CSSProperties;
}

const TextVariant = styled.p<TextProps>(({ theme, variant = 'body2' }) => ({
  ...getVariantFromTheme(theme, variant)
}))

const TextColor = styled(TextVariant) <TextProps>`
  color: ${props => props.color ? props.theme.colors[props.color].x500 : props.theme.colors.neutral.x999};
  .dot {
    color: ${props => props.theme.colors.primary.x500}
  }
`;

export default function Text(props: TextProps) {
  return (
    <TextColor {...props} />
  )
}
