import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { StyledLayout } from "./StyledLayout";

type Props = {};

const Layout = (props: Props) => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
