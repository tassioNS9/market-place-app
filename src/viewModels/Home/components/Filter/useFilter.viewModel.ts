import { useGetProductCategoriesQuery } from "@/shared/queries/product/use-get-product-categories";
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";
import { useFilterStore } from "@/shared/store/use-filter-store";
import { useCallback } from "react";

export const useFilterViewModel = () => {
  const { data: productCategories, isLoading } = useGetProductCategoriesQuery();
  const { close } = useBottomSheetStore();

  const {
    updateFilter,
    filterState,
    applyFilters,
    appliedFilterState,
    resetFilter,
  } = useFilterStore();

  const handleValueMaxChange = (value: number) => {
    updateFilter({ key: "valueMax", value: value });
  };

  console.log("appliedFilterState", appliedFilterState);

  const handleValueMinChange = (value: number) => {
    updateFilter({ key: "valueMin", value: value });
  };

  const handleCategoryToggle = useCallback(
    (categoryId: number) => {
      const categoryAlreadyInArray =
        filterState.selectedCategories.includes(categoryId);

      if (categoryAlreadyInArray) {
        updateFilter({
          key: "selectedCategories",
          value: filterState.selectedCategories.filter(
            (id) => id !== categoryId,
          ),
        });
      } else {
        updateFilter({
          key: "selectedCategories",
          value: [...filterState.selectedCategories, categoryId],
        });
      }
    },
    [filterState.selectedCategories, updateFilter],
  );

  const handleApllyFilters = () => {
    applyFilters();
    close();
  };

  const handleClearFilters = () => {
    close();
    resetFilter();
  };
  return {
    productCategories,
    isLoading,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToggle,
    selectedCategories: filterState.selectedCategories,
    handleApllyFilters,
    handleClearFilters,
  };
};
