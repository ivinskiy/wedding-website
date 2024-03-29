import styled from "styled-components";

export const NavigationHeader = styled.nav`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 51;
  width: 100%;
  @media screen and (min-width: 800px) {
    justify-content: flex-end;
    width: calc(100vw - 86px);
    position: sticky;
    height: 200px;
  }
`;

export const IconContainer = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;

  svg {
    width: 75%;
    @media screen and (min-width: 900px) {
      width: 100%;
    }
  }

  .backgroundFlower {
    transition: fill 0.5s ease-in-out;
  }
  :hover {
    .backgroundFlower {
      fill: #e13357;
    }
  }
`;

export const StyledAnchor = styled.span`
  position: absolute;
  font-weight: bold;
  font-family: DPDorkDiary;
  font-size: 12px;
  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
`;
