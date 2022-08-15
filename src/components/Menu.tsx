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
import categoryApi from "@/services/categories.service";
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
  const { data: categories } = categoryApi.useCategoryListActiveQuery();

  return (
    <UL>
      {categories &&
        categories.map((item) => (
          <li key={item._id}>
            <Link to={`/danh-muc/${item.name_ascii}`}>{item.name}</Link>
            <CaretRightIcon />
          </li>
        ))}
    </UL>
  );
};

export default Menu;
