import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: var(--info-2);
  position: sticky;
  padding: 0 20px;
  align-items: center;
  display: flex;
  height: 64px;
  top: 0;
  z-index: 999;
`;

export const StyledLogo = styled.div`
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: #ffffff;
  font-weight: 500;
  user-select: none;

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
  margin-left: 65px;

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

export const StytedUser = styled.a`
  margin-left: auto;
  font-weight: bold;
  font-size: 16px;
  color: var(--gray-2);

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: #ffffff;
  }
`;
