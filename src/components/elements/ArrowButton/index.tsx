import React from 'react';
import Button, { ButtonProps } from '../Button';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { styled } from 'styled-components';

const iconSize = 30;

interface ArrowButtonProps extends ButtonProps {

}

const Styled = styled(Button) <ArrowButtonProps>`
  background-color: transparent;
  color: #FFF;
  width: fit-content;
  max-width: ${iconSize}px;
  height: ${iconSize}px;
  overflow: hidden;
  padding: 0rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: right;
  align-items: center;
  gap:0.5rem;
  white-space: nowrap;
  border-radius: ${iconSize/2}px;

  .icon {
    color: ${props => props.color ? props.theme.colors[props.color].x500 : props.theme.colors.primary.x500};
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
  }

  &:hover {
    max-width: 120px;
    background-color: ${props => props.color ? props.theme.colors[props.color].x500 : props.theme.colors.primary.x500};
    padding-left: 1rem;
    .icon {
      color: ${props => props.color ? props.theme.colors[props.color].x700 : props.theme.colors.primary.x700};
    }
  }
`

export default function ArrowButton({ children, ...props }: ArrowButtonProps) {
  return (
    <Styled {...props}>
      {children}
      <div className='icon'>
        <BsArrowRightCircleFill size={iconSize} />
      </div>
    </Styled>
  )
}
