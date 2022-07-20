import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { StyledContent, StyledWrapper } from "./StyledLayout";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <Sidebar />
        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledWrapper>
    </>
  );
};

export default Layout;
