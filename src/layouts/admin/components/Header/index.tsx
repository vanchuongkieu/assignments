import { StyledHeader, StyledLogo, StytedUser } from "./StyledHeader";
import LogoImage from "@/assets/images/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";
import { authAction, UserSelector } from "@/features/Auth/reducer";
import { message } from "antd";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(UserSelector);

  const handleLogout = () => {
    dispatch(authAction.clearAuth());
    navigate("/login");
    message.success("Đăng xuất thành công");
  };

  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">
          <img src={LogoImage} />
        </Link>
        <span>Dashboard</span>
      </StyledLogo>
      <Search />
      <StytedUser>
        Xin chào: {user?.name} (<span onClick={handleLogout}>Thoát</span>)
      </StytedUser>
    </StyledHeader>
  );
};

export default Header;
