import { StyledHeader, StyledLogo, StytedUser } from "./StyledHeader";
import LogoImage from "@/assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import Search from "../Search";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">
          <img src={LogoImage} />
        </Link>
        <span>Dashboard</span>
      </StyledLogo>
      <Search />
      <StytedUser>Xin chào: Kiều Văn Chương</StytedUser>
    </StyledHeader>
  );
};

export default Header;
