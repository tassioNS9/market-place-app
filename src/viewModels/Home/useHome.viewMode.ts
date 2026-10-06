import { useProductInfiniteQuery } from "@/shared/queries/product/use-product-infinite.query";
import { useFilterStore } from "@/shared/store/use-filter-store";

export const useHomeViewModel = () => {
  const { appliedFilterState } = useFilterStore();

  const {
    products,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery({ filters: appliedFilterState });

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  const handleRefresh = async () => {
    await refetch();
  };

  const handleEndReached = () => {
    handleLoadMore();
  };

  console.log("Data:", JSON.stringify(products, null, 2));
  console.log("Error:", error);
  console.log("Is Loading:", isLoading);
  return {
    handleLoadMore,
    handleRefresh,
    handleEndReached,
    products,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  };
};
