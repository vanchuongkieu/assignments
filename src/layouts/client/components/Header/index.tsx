import { StyledContainer } from "../../StyledLayout";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledSearch,
} from "./StyledHeader";
import Menu from "../Menu";
import LogoImage from "@/assets/images/logo/logo.png";
import { SearchIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledHeaderContainer>
          <StyledLogo>
            <Link to="/">
              <img src={LogoImage} />
            </Link>
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
          <Menu />
        </StyledHeaderContainer>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
