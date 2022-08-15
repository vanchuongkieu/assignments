import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout, AuthLayout, ClientLayout } from "@/layouts";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetail from "./Product";
import CategoryList from "./Admin/Category/CategoryList";
import ProductAdd from "./Admin/Product/ProductAdd";
import ProductEdit from "./Admin/Product/ProductEdit";
import ProductList from "./Admin/Product/ProductList";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ProtectedRoute from "@/components/ProtectedRoute";
import Order from "./Cart/Order";
import OrderList from "./Admin/Order/OrderList";
import Category from "./Category";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="shopping-cart" element={<Cart />} />
        <Route path="shopping-cart/order" element={<Order />} />
        <Route path="danh-muc/:ascii" element={<Category />} />
        <Route path=":ascii" element={<ProductDetail />} />
      </Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/product" />} />
        <Route path="product">
          <Route index element={<ProductList />} />
          <Route path="new" element={<ProductAdd />} />
          <Route path=":id/edit" element={<ProductEdit />} />
        </Route>
        <Route path="order">
          <Route index element={<OrderList />} />
          <Route path=":id/detail" element={<ProductEdit />} />
        </Route>
        <Route path="category" element={<CategoryList />} />
      </Route>
    </Routes>
  );
};

export default App;
