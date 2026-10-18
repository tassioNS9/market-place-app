import { useCartStore } from "@/shared/store/cart-store";
import { createElement } from "react";
import { AddCardBottomSheet } from "./components/AddCardBottomSheet";
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";
import { useGetCreditCards } from "../../shared/queries/credit-cards/use-get-credit-cards.query";

export const useCartViewModel = () => {
  const { products } = useCartStore();

  const { open: openBottomSheet } = useBottomSheetStore();
  const { data: creditCards = [], isLoading: isLoadingCreditCards } =
    useGetCreditCards();

  const openCartBottomSheet = () => {
    openBottomSheet({ content: createElement(AddCardBottomSheet) });
  };
  return { products, openCartBottomSheet, creditCards, isLoadingCreditCards };
};
