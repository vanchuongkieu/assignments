import http from "./httpOption";
import { HomeDataDto, ProductDto } from "./dtos/Product.dto";

class ProductService {
  all() {
    return http.get<ProductDto[]>("/products");
  }
  search(keyword: string) {
    return http.post<ProductDto[]>("/products/search-products", { keyword });
  }
  all_active() {
    return http.get<ProductDto[]>("/products?status=true");
  }
  filter_by_category(ascii: string) {
    return http.get<ProductDto[]>(
      `/products/find-product-by-category/${ascii}`
    );
  }
  get(id?: string) {
    return http.get<ProductDto>(`/products/find-product-by-id/${id}`);
  }
  get_home_data() {
    return http.get<HomeDataDto>("/products/home-data");
  }
  add(payload: ProductDto) {
    return http.post<ProductDto>(`/products/create-product`, payload);
  }
  upload(payload: FormData) {
    return http.post<string>(`/upload/single-upload`, payload);
  }
  edit(payload: ProductDto) {
    return http.put<ProductDto>(
      `/products/update-product/${payload._id}`,
      payload
    );
  }
  edit_status(payload: ProductDto) {
    return http.put<ProductDto>(
      `/products/update-status-product/${payload._id}`,
      payload
    );
  }
}

export default new ProductService();
