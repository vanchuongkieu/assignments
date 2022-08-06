import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  min-height: 100px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
`;

export const ColLeft = styled.div`
  padding: 90px 45px;
  flex: 1;
  display: flex;
  flex-direction: column;
  .bottom {
    text-align: center;
    margin-top: auto;
  }
  .login-with {
    margin-top: 10px;
    img {
      width: 40px;
      margin: 5px;
      cursor: pointer;
    }
  }
`;

export const ColRight = styled.div`
  width: 300px;
  flex-basis: 300px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px 0;
`;
