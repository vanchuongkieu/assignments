import { StyledContainer } from "../../StyledLayout";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
} from "./StyledHeader";
import Menu from "../Menu";
import LogoImage from "@/assets/images/logo/logo.png";
import { SearchIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import Search from "../Search";

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
          <Search />
          <Menu />
        </StyledHeaderContainer>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
