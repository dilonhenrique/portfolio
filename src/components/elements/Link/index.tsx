import React from 'react';
import Text from '../Text';
import NextLink from 'next/link';
import { styled } from 'styled-components';
import { Theme, ThemeColors, ThemeTypographyVariants } from '@/theme/theme';
import { getVariantFromTheme } from '@/theme/parseCss';

interface LinkProps {
  children?: React.ReactNode;
  variant?: ThemeTypographyVariants;
  color?: ThemeColors;
  theme?: Theme;
  href: string;
  target?: string;
}

const LinkVariant = styled(NextLink)<LinkProps>(({ theme, variant = 'body2' }) => ({
  ...getVariantFromTheme(theme, variant)
}))

const StyledLink = styled(LinkVariant)<LinkProps>`
  text-decoration: none;
  font-weight: 700;
  opacity: 1;
  color: ${props => props.color ? props.theme.colors[props.color].x500 : props.theme.colors.primary.x500};
  transition: 0.3s;

  &:hover {
    color: ${props => props.color ? props.theme.colors[props.color].x700 : props.theme.colors.primary.x700};
  }
`

export default function Link(props: LinkProps) {
  return (
    <StyledLink {...props} />
  )
}

Link.defaultProps = {
  variant: 'body2',
}
