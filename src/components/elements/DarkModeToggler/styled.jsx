import { styled } from "styled-components";

export const Switcher = styled.span`
  display: inline-flex;
  width: 50px;
  height: 25px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  z-index: 0;
  vertical-align: middle;

  input {
    cursor: inherit;
    position: absolute;
    opacity: 0;
    height: 100%;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 1;
    left: -100%;
    width: 300%;
  }

  .thumb {
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background-color: ${props => props.checked ? props.theme.colors.primary.x500 : props.theme.colors.neutral.x500};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transform: translateX(${props => props.checked ? 24 : 1}px);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
  }

  .track {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    z-index: -1;
    -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #606060;
    opacity: 0.5;
  }
`