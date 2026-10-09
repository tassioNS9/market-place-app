import { marketPlaceApiClient } from "../api/market-place";
import { ProductRequest } from "../interfaces/http/product-request";
import { ProductCategory, ProductInterface } from "../interfaces/product";
import { GetProductDetailsInterface } from "../interfaces/http/product-detail";
import { ProductComment } from "../interfaces/product-comment";
import { GetProductCommentsInterface } from "../interfaces/http/product-comments";
import { PaginatedResponse } from "../interfaces/http/paginated-response";

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<
    PaginatedResponse<ProductInterface>
  >("/products", params);
  return data;
};

export const getProductsCategories = async () => {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
    "/products/categories",
  );
  return data;
};

export const getProductDetails = async (id: number) => {
  const { data } = await marketPlaceApiClient.get<GetProductDetailsInterface>(
    `/products/${id}`,
  );
  return data;
};

export const getProductComments = async (
  params: GetProductCommentsInterface,
) => {
  const { data } = await marketPlaceApiClient.post<
    PaginatedResponse<ProductComment>
  >("/products/comments", params);
  return data;
};
