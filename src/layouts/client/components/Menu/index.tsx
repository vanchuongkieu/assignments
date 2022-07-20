import React from "react";
import {
  LocationIcon,
  ShippingCarIcon,
  ShoppingBagNewIcon,
} from "@/assets/icons";
import { StyledMenu, StyledMenuItem, StyledMenuItemCart } from "./StyledMenu";

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

type MenuProps = {
  cartTotal: number;
};

const Menu = (props: MenuProps) => {
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
      <MenuItem to="/">
        <StyledMenuItemCart count={props.cartTotal}>
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
