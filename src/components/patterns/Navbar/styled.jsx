const { styled } = require("styled-components");

export const StyledNavbar = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${props => props.theme.colors.neutral.x900};
  z-index: 10;

  .container {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    min-height: 80px;
  }
`