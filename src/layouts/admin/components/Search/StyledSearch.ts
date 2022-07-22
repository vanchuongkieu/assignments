import styled, { css } from "styled-components";

export const StyledSearch = styled.div<{ search?: boolean }>`
  max-width: 500px;
  width: 100%;
  margin-left: 65px;
  position: relative;
  z-index: 9999;

  @media (max-width: 768px) {
    margin-left: 30px;
  }

  & .search-form {
    width: 100%;
    height: 35px;
    position: relative;

    &-input {
      width: 100%;
      height: 100%;
      outline: none;
      border: 0;
      ${(props) =>
        props.search
          ? css`
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
            `
          : "border-radius: 10px;"}
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

export const StyledSearchResult = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 0px #ddd;
  height: auto;
  border-top: 1px solid #ddd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  list-style: none;
  margin: 0;

  & a {
    display: block;
    padding: 5px;
    color: #444;

    &:hover {
      color: #000;
    }
  }
`;
