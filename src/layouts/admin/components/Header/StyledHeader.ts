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
