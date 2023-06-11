import { styled } from "styled-components";

export const StyledAbout = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;

    .about__numbers {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    .about__number {
      width: 180px;
      /* height: 200px; */
      padding: 3rem 0;
      /* display: flex; */
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s ease-in-out;

      svg {
        margin-bottom: 1rem;
      }

      &:hover {
        /* background-color: #d9d9d9; */
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      }
    }

    img {
      max-width: 100%;
      vertical-align: bottom;
    }
  }
`