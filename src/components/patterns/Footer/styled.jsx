import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${props => props.darkMode ? '#000000' : props.theme.colors.neutral.x100};
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
    flex-wrap: wrap;

    .socials {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}px){
    .container {
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`