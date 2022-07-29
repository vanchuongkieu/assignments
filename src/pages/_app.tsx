import { AdminLayout, ClientLayout } from "@/layouts";
import categoryService from "@/services/category.service";
import { CategoryDto } from "@/services/dtos/Category.dto";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CategoryList from "./admin/Category/CategoryList";
import ProductAdd from "./admin/Product/ProductAdd";
import ProductEdit from "./admin/Product/ProductEdit";
import ProductList from "./admin/Product/ProductList";
import Cart from "./Cart";
import Home from "./Home";
import Product from "./Product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="shopping-cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/product" />} />
        <Route path="product">
          <Route index element={<ProductList />} />
          <Route path="new" element={<ProductAdd />} />
          <Route path=":id/edit" element={<ProductEdit />} />
        </Route>
        <Route path="category" element={<CategoryList />} />
      </Route>
    </Routes>
  );
};

export default App;
