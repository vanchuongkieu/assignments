import {
  AppleWatchIcon,
  CaretRightIcon,
  IpadIcon,
  IphoneIcon,
  IpodIcon,
  LaptopIcon,
  NewpaperIcon,
  OldIcon,
  OldPhoneIcon,
  PcIcon,
  SmartHomeIcon,
  TvIcon,
  TypeCIcon,
} from "@/assets/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 200px;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    & a {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      color: #343a40;

      & svg {
        flex-basis: 30px;
        margin-right: 10px;
      }
    }
  }
`;

const Menu = () => {
  return (
    <UL>
      <li>
        <Link to="">
          <IphoneIcon />
          Điện thoại
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <LaptopIcon />
          Laptop
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <IpadIcon />
          Máy tính bảng
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <IpodIcon />
          Âm thanh
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <AppleWatchIcon />
          Đồng hồ
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <SmartHomeIcon />
          Nhà thông minh
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <TypeCIcon />
          Phụ kiện
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <PcIcon />
          PC - Màn hình
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <TvIcon />
          Tivi
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <OldIcon />
          Thu cũ
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <OldPhoneIcon />
          Hàng cũ
        </Link>
        <CaretRightIcon />
      </li>
      <li>
        <Link to="">
          <NewpaperIcon />
          Khuyến mãi
        </Link>
        <CaretRightIcon />
      </li>
    </UL>
  );
};

export default Menu;
