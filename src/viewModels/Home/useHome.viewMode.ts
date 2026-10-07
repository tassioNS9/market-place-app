import { useProductInfiniteQuery } from "@/shared/queries/product/use-product-infinite.query";
import { useFilterStore } from "@/shared/store/use-filter-store";
import { useState } from "react";
import { useDebounce } from "@/shared/hooks/useDebounce";

export const useHomeViewModel = () => {
  const { appliedFilterState } = useFilterStore();
  const [searchInputText, setSearchInputText] = useState("");
  const currentSearchText = useDebounce(searchInputText);

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
  } = useProductInfiniteQuery({
    filters: { ...appliedFilterState, searchText: currentSearchText },
  });

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  console.log(appliedFilterState, "appliedFilters");

  const handleRefresh = async () => {
    await refetch();
  };

  const handleEndReached = () => {
    handleLoadMore();
  };

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
    refetch,
    isRefetching,
    setSearchInputText,
    searchInputText,
  };
};
