import { StyledContainer } from "./../../StyledLayout";
import styled from "styled-components";

export const StyledHeader = styled.div`
  position: sticky;
  height: 64px;
  width: 100%;
  left: 0px;
  top: 0px;
  background: var(--red-2);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 99;
  & ${StyledContainer} {
    height: 100%;
  }
`;

export const StyledHeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledLogo = styled.div`
  height: 55px;
  width: 180px;

  & img {
    width: 55px;
    height: 100%;
    object-fit: contain;
    vertical-align: middle;
    border-style: none;
  }
`;
