import React from "react";
import {
  LocationIcon,
  ShippingCarIcon,
  ShoppingBagNewIcon,
} from "@/assets/icons";
import { StyledMenu, StyledMenuItem, StyledMenuItemCart } from "./StyledMenu";
import { useSelector } from "react-redux";
import { CartTotalSelector } from "@/features/Cart/reducer";

type MenuItemProps = {
  to: string;
  classic?: boolean;
  children: React.ReactNode;
};

const MenuItem = ({ children, classic, to }: MenuItemProps) => {
  if (classic) {
    return (
      <StyledMenuItem as={"a"} href={to}>
        {children}
      </StyledMenuItem>
    );
  }
  return <StyledMenuItem to={to}>{children}</StyledMenuItem>;
};

const Menu = () => {
  const cartLength = useSelector(CartTotalSelector);
  return (
    <StyledMenu>
      <MenuItem classic to="tel:0982934000">
        <span>
          Gọi mua hàng
          <small>1800.2097</small>
        </span>
      </MenuItem>
      <MenuItem to="/">
        <LocationIcon width={28} height={28} />
        <span>
          Cửa hàng
          <small>gần bạn</small>
        </span>
      </MenuItem>
      <MenuItem to="/">
        <ShippingCarIcon />
        <span>
          Tra cứu
          <small>đơn hàng</small>
        </span>
      </MenuItem>
      <MenuItem to="/shopping-cart">
        <StyledMenuItemCart count={cartLength}>
          <ShoppingBagNewIcon />
        </StyledMenuItemCart>
        <span>
          Giỏ
          <small>hàng</small>
        </span>
      </MenuItem>
    </StyledMenu>
  );
};

export default Menu;
