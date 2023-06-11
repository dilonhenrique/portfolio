import { styled } from "styled-components";

export const StyledBanner = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  .container {
    padding-top: calc(7rem + 80px);
    /* padding-bottom: 2rem; */

    .banner__scroll {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10rem 0;
      opacity: 0.3;
      writing-mode: vertical-lr;
      
      p {
        transform: rotate(180deg);
        
        &:after {
          content: '';
          background-color: black;
          display: inline-block;
          width: 0.5px;
          height: 60px;
          margin-top:1rem;
          margin-left: -4px;
        }
      }
    }

  }
`