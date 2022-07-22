import { ProductDto } from "@/services/dtos/Product.dto";
import { CategoryDto } from "./dtos/Category.dto";
import http from "./httpOption";

class CategoryService {
  all() {
    return http.get<CategoryDto[]>("/categories");
  }
  get(id: number) {
    return http.get<CategoryDto>(`/categories/find-category-by-id/${id}`);
  }
  get_product(id: number) {
    return http.get<ProductDto[]>(`/categories/${id}/products?status=true`);
  }
  add(payload: CategoryDto) {
    return http.post<CategoryDto>(`/categories/create-category`, payload);
  }
  edit(payload: CategoryDto) {
    return http.put<CategoryDto>(
      `/categories/update-category/${payload._id}`,
      payload
    );
  }
}

export default new CategoryService();
