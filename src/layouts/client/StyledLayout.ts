import styled, { css } from "styled-components";

export const StyledLayout = styled.div`
  min-width: 1230px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1230px;
  min-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledGrid = styled.div<{ col?: number; gap?: number }>`
  display: grid;
  ${(props) => css`
    grid-template-columns: repeat(${props.col ? props.col : 2}, 1fr);
    grid-gap: ${props.gap ? props.gap : 15}px;
  `}
`;

export const StyledList = styled.ul<{ flex?: boolean }>`
  margin: 0;
  padding: 0;
  list-style: none;
  list-style-type: none;

  ${(props) => css`
    ${props.flex &&
    css`
      display: flex;
      flex-wrap: wrap;
      & li {
        white-space: nowrap;

        a {
          font-size: 11.5px;
        }
      }
    `}
  `}
`;

export const StyledMark = styled.span`
  &::after {
    content: "-";
    margin: 0 5px;
  }
`;

export const StyledListItem = styled.li<{
  isTitle?: boolean;
  isActive?: boolean;
}>`
  ${(props) => css`
    font-size: ${props.isTitle ? "16px" : "12px"};
    color: ${!props.isTitle && props.isActive ? "var(--red-2)" : "#444444"};
  `}

  & a {
    ${(props) => css`
      display: block;
      color: ${!props.isTitle && props.isActive ? "var(--red-2)" : "#444444"};
      ${!props.isTitle &&
      css`
        transition: color 250ms ease-in-out;
        &:hover {
          color: var(--red-2);
        }
      `}
    `}
  }
  min-height: 25px;
  display: flex;
  align-items: center;
  user-select: none;

  .image img {
    pointer-events: none;
    & + img {
      margin-left: 15px;
    }

    &:last-child {
      margin-left: 0;
      margin-top: 10px;
      display: block;
    }
  }
`;
