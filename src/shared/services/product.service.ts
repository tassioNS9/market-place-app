import { marketPlaceApiClient } from "../api/market-place";
import { ProductResponse } from "../interfaces/http/product-response";
import { ProductRequest } from "../interfaces/http/product-request";

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    "/products",
    { params },
  );
  return data;
};
