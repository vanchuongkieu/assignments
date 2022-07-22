import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import { StyledSider } from "./StyledSidebar";
import {
  DropboxIcon,
  IpadIcon,
  IphoneIcon,
  IpodIcon,
  LaptopIcon,
  SettingsAltIcon,
} from "@/assets/icons";

const Sidebar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  pathnames.length > 3 && pathnames.splice(3, pathnames.length);

  const items: MenuProps["items"] = [
    {
      label: <Link to="/admin/product">Sản phẩm chung</Link>,
      key: "/admin/product",
      icon: <DropboxIcon width={25} />,
    },
    {
      label: <Link to="/admin/product?category=dien-thoai">Điện thoại</Link>,
      key: "/admin/product?category=dien-thoai",
      icon: <IphoneIcon width={25} />,
    },
    {
      label: <Link to="/admin/product?category=laptop">Laptop</Link>,
      key: "/admin/product?category=laptop",
      icon: <LaptopIcon width={25} />,
    },
    {
      label: (
        <Link to="/admin/product?category=may-tinh-bang">Máy tính bảng</Link>
      ),
      key: "/admin/product?category=may-tinh-bang",
      icon: <IpadIcon width={25} />,
    },
    {
      label: <Link to="/admin/product?category=am-thanh">Âm thanh</Link>,
      key: "/admin/product?category=am-thanh",
      icon: <IpodIcon width={25} />,
    },
    {
      label: <Link to="/admin/category">Danh mục</Link>,
      key: "/admin/category",
      icon: <SettingsAltIcon width={25} />,
    },
  ];

  return (
    <StyledSider
      as={Layout.Sider}
      width={300}
      collapsedWidth="0"
      breakpoint="lg"
    >
      <Menu
        theme="light"
        mode="inline"
        style={{ height: "100%" }}
        defaultSelectedKeys={["/admin/product"]}
        selectedKeys={[pathnames.join("/") + location.search]}
        items={items}
      />
    </StyledSider>
  );
};

export default Sidebar;
