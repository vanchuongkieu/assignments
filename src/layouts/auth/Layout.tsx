import * as S from "./StyledLayout";
import { Link, Navigate, Outlet } from "react-router-dom";
import LogoImage from "@/assets/images/logo/logo.png";
import FbImage from "@/assets/images/logo/fb.png";
import GgImage from "@/assets/images/logo/gg.png";
import { UserSelector } from "@/features/Auth/reducer";
import { useSelector } from "react-redux";

type Props = {};

function Layout({}: Props) {
  const user = useSelector(UserSelector);
  return user ? (
    <Navigate to="/" />
  ) : (
    <S.Wrapper>
      <S.Container>
        <S.ColLeft>
          <Outlet />
          <div className="bottom">
            <span>Hoặc đăng nhập bằng</span>
            <div className="login-with">
              <img src={FbImage} draggable={false} />
              <img src={GgImage} draggable={false} />
            </div>
          </div>
        </S.ColLeft>
        <S.ColRight>
          <Link to="/">
            <img src={LogoImage} width={185} />
          </Link>
        </S.ColRight>
      </S.Container>
    </S.Wrapper>
  );
}

export default Layout;
