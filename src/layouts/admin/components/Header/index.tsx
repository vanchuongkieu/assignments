import {
  StyledHeader,
  StyledLogo,
  StyledSearch,
  StytedUser,
} from "./StyledHeader";
import LogoImage from "@/assets/images/logo/logo.png";
import { SearchIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">
          <img src={LogoImage} />
        </Link>
        <span>Dashboard</span>
      </StyledLogo>
      <StyledSearch>
        <form className="search-form">
          <input
            type="text"
            className="search-form-input"
            placeholder="Nhập từ khóa tìm kiếm..."
          />
          <div className="search-form-icon">
            <SearchIcon />
          </div>
        </form>
      </StyledSearch>
      <StytedUser>Xin chào: Kiều Văn Chương</StytedUser>
    </StyledHeader>
  );
};

export default Header;
