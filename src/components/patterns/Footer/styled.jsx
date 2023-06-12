import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${props => props.darkMode ? '#000000' : props.theme.colors.neutral.x999};
  display: flex;
  width: 100%;
  justify-content: center;

  .container {
    padding-top: 3rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;

    .socials {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
  }
`