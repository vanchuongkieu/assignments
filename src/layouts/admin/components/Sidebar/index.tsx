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

const items: MenuProps["items"] = [
  {
    label: <Link to="/admin/product">Sản phẩm chung</Link>,
    key: "/admin/product",
    icon: <DropboxIcon width={25} />,
  },
  {
    label: <Link to="/admin/product?category=1">Điện thoại</Link>,
    key: "/admin/product?category=1",
    icon: <IphoneIcon width={25} />,
  },
  {
    label: <Link to="/admin/product?category=2">Laptop</Link>,
    key: "/admin/product?category=2",
    icon: <LaptopIcon width={25} />,
  },
  {
    label: <Link to="/admin/product?category=3">Máy tính bảng</Link>,
    key: "/admin/product?category=3",
    icon: <IpadIcon width={25} />,
  },
  {
    label: <Link to="/admin/product?category=4">Âm thanh</Link>,
    key: "/admin/product?category=4",
    icon: <IpodIcon width={25} />,
  },
  {
    label: <Link to="/admin/category">Danh mục</Link>,
    key: "/admin/category",
    icon: <SettingsAltIcon width={25} />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  pathnames.length > 3 && pathnames.splice(3, pathnames.length);

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
