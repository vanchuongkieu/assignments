import { Slider } from "antd";
import styled from "styled-components";

export const StyledSider = styled(Slider)`
  height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  background: #ffffff;
  box-shadow: 0px 2px 150px rgba(90, 97, 105, 0.1);
  transition: none;
  z-index: 999;

  & .ant-layout-sider-zero-width-trigger {
    background: var(--info-2);
    border-radius: 0 6px 6px 0;
    font-size: 1.8rem;
    padding-right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .ant-menu {
    border: 0;
    padding: 20px 0;
    &-item {
      width: 260px;
      margin: 0 auto;
      margin-bottom: 5px;
      border-radius: 8px;
      font-weight: 500;
      padding-left: 15px !important;
      padding-right: 15px !important;

      &:hover {
        background-color: var(--gray-1);
        color: var(--color);
        & a {
          color: var(--color);
        }
      }

      &.ant-menu-item-selected {
        color: #ffffff;
        background-color: var(--info-2);

        fill: #ffffff;

        & a {
          color: #ffffff;
        }
      }

      &::after {
        border: 0;
      }
    }
  }
`;
