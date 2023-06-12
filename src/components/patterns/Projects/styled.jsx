import { styled } from "styled-components";

export const StyledProjects = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  .container {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem 2rem;
    padding: 1rem 0;

    .project {
      list-style: none;

      &__image {
        display: block;
        position: relative;
        width: 100%;
        aspect-ratio: 5 / 3;
        background-size: cover;
        background-position: center center;
        background-color: ${props => props.theme.colors.neutral.x050};
        border: 1px solid ${props => props.theme.colors.neutral.x100};
        border-radius: 5px;
        transition: 0.3s;
        filter: grayscale(100%);
        opacity: 0.8;

        &:hover {
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          filter: grayscale(0%);
          opacity: 1;
        }
      }

      &__icons {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        gap: 1rem;
        padding: 0.5rem;
        color: ${props => props.theme.colors.neutral.x900};

        > div {
          background-color: ${props => props.theme.colors.neutral.x100};
          padding: 0.3rem;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          opacity: 0.7;
        }
      }

      &__text {
        padding-top:0.5rem;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`