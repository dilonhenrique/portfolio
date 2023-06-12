import { lightColors } from "@/theme/defaults/colors";
import { styled } from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${lightColors.neutral.x999};
  z-index: 10;

  .container {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    min-height: 80px;

    .menu {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  }
`