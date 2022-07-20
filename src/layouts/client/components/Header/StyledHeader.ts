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
  z-index: 9999;
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

export const StyledSearch = styled.div`
  max-width: 500px;
  width: 100%;

  & .search-form {
    width: 100%;
    height: 35px;
    position: relative;

    &-input {
      width: 100%;
      height: 100%;
      outline: none;
      border: 0;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      padding-left: 40px;
      padding-right: 15px;
      text-overflow: ellipsis;
    }

    &-icon {
      height: 100%;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      font-size: inherit;

      & svg {
        width: 15px;
        height: 15px;
        fill: var(--color);
        margin-bottom: -1px;
      }
    }
  }
`;
