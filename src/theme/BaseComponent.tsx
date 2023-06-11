import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from '@skynexui/responsive_stylesheet';

interface IStyledBaseComponent {
  sx?: StyleSheet;
}

const StyledBaseComponent = styled.div<IStyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ sx }) => parseStyleSheet(sx)}
`;

export function BaseComponent(props: any) {
  return (
    <StyledBaseComponent {...props} />
  )
}

BaseComponent.defaultProps = {
  sx: {}
}