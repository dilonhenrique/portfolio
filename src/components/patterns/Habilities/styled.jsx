import { styled } from "styled-components";

export const StyledHabilities = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.colors.neutral.x050};

  .container {
    padding-top: 5rem;
    padding-bottom: 6rem;
  }

  .habilities {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    /* justify-items: left; */
    gap: 2rem;
    
    * { transition: 0.3s ease-in-out; }
    
    .habilitie {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;  
      
      &__icon {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0;
        color: ${props => props.theme.colors.primary.x500};
        width: 80px;
        height: 80px;
        
        &:before{
          content: '';
          position: absolute;
          top:0; bottom: 0; left: 0; right: 0;
          z-index: -1;
          background-color: ${props => props.theme.colors.neutral.x000};
          border-radius: 50%;
          transition: 0.3s ease-in-out;
        }

      }

      &__name {
        font-weight: 700;
      }

      &:hover {
        .habilitie__icon svg{
          /* color: ${props => props.theme.colors.neutral.x000}; */
        }
       .habilitie__icon:before {
          border-radius: 0;
          transform: rotate(45deg);
          /* background-color: ${props => props.theme.colors.primary.x500}; */
        }

        .habilitie__name {
          letter-spacing: 0.2rem;
        }
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}px){
    .habilities {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 320px){
    .habilities {
      grid-template-columns: 1fr 1fr;
    }
  }
`