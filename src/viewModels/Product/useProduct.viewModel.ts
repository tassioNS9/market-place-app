import { useGetProductCommentsInfiniteQuery } from "@/shared/queries/product/use-get-product-comments-infinite-query";
import { useGetProductDetails } from "@/shared/queries/product/use-get-product-details";
import { useCartStore } from "@/shared/store/cart-store";
import { useModalStore } from "@/shared/store/modal-store";
import { createElement } from "react";
import { AddToCartSuccessModal } from "./components/AddToCarSuccessModal";
import { router } from "expo-router";
import { ReviewBottomSheet } from "./components/ReviewBottomSheet";
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetails(productId);

  const {
    comments,
    isLoading: isLoadingComments,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: errorComments,
    isRefetching,
    isFetchingNextPage,
  } = useGetProductCommentsInfiniteQuery(productId);

  const { addProduct, products } = useCartStore();
  console.log("products", products);

  const { open, close } = useModalStore();
  const { open: openBottomSheet, close: closeReview } = useBottomSheetStore();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefetch = () => {
    if (!isRefetching) {
      refetch();
    }
  };

  const handleEndReached = () => {
    handleLoadMore();
  };

  const onGoToCart = () => {
    router.push("/(private)/(tabs)/cart");
    close();
  };

  const onContinueShopping = () => {
    router.push("/(private)/(tabs)/home");
    close();
  };

  const handleAddToCart = () => {
    if (!productDetails) return;

    addProduct({
      id: productDetails.id,
      name: productDetails.name,
      price: productDetails.value,
      image: productDetails?.photo,
    });

    open(
      createElement(AddToCartSuccessModal, {
        productName: productDetails.name,
        onGoToCart,
        onClose: () => {
          close();
        },
        onContinueShopping,
      }),
    );
  };

  const handleOpenReview = () => {
    if (!productDetails) return;

    openBottomSheet({
      content: createElement(ReviewBottomSheet, {
        productId,
      }),
    });
  };

  return {
    isLoading,
    productDetails,
    error,
    handleLoadMore,
    handleRefetch,
    handleEndReached,
    isLoadingComments,
    errorComments,
    comments,
    isRefetching,
    isFetchingNextPage,
    handleAddToCart,
    handleOpenReview,
  };
};
