import { FC } from "react";

import { CartProduct } from "@/shared/store/cart-store";
import { ProductCartCardView } from "./ProductCartCard.view";
import { useProductCartCardViewModel } from "./useProductCartCard.viewModel";

interface ProductCartCardProps {
  product: CartProduct;
}

export const ProductCartCard: FC<ProductCartCardProps> = ({ product }) => {
  const viewModel = useProductCartCardViewModel();
  return <ProductCartCardView product={product} {...viewModel} />;
};
