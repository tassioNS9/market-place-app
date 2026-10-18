import { useGetOrdersQuery } from "@/shared/queries/orders/use-get-orders.query";

export const useOrdersViewModel = () => {
  const { data: ordersData, isLoading, error } = useGetOrdersQuery();

  return {
    ordersData,
    isLoading,
    error,
  };
};
