import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const StyledMenuItem = styled(Link)`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #ffffff;
  border-radius: 5px;
  font-size: 12px;
  transition: background-color 250ms linear;
  font-weight: 500;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    color: #ffffff;
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.02);
  }

  & span {
    margin-top: 2px;
  }

  & svg {
    fill: #ffffff;
  }

  & small {
    font-size: inherit;
    margin-top: 2px;
    display: block;
  }
`;

export const StyledMenuItemCart = styled.div<{ count: number }>`
  position: relative;

  & svg {
    width: 28px;
    height: 28px;
    margin-bottom: -3px;
  }

  &::before {
    content: "${(props) => props.count}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-52%, -18%);
    font-size: 12px;
    font-weight: bold;
  }
`;
