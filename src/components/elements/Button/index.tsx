import { getVariantFromTheme } from '@/theme/parseCss';
import { Theme, ThemeColors } from '@/theme/theme';
import React from 'react';
import { styled } from 'styled-components';
import { BsArrowRightCircleFill } from 'react-icons/bs';

export interface ButtonProps {
  theme?: Theme;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  onClick?: () => void;
  variant?: keyof typeof variants;
  color?: ThemeColors;
  children?: React.ReactNode;
}

const variants = {
  contained: {
    color: '#FFFFFF',
  }
}

const ButtonVariants = styled.button<ButtonProps>(({ theme, variant = 'contained' }) => ({
  ...variants[variant],
  ...getVariantFromTheme(theme, 'body4'),
}))

const StyledButton = styled(ButtonVariants) <ButtonProps>`
  background-color: ${props => props.color ? props.theme.colors[props.color].x500 : props.theme.colors.primary.x500};
  border: none;
  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  transition: 0.3s;
  opacity: 1;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.color ? props.theme.colors[props.color].x700 : props.theme.colors.primary.x700};
  }
`

export default function Button({ as, ...props }: ButtonProps) {
  if (props.href !== undefined) as = 'a';

  return (
    <StyledButton as={as} {...props} />
  )
}
