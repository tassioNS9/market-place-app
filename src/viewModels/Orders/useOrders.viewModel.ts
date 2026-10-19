import { useGetOrdersQuery } from "@/shared/queries/orders/use-get-orders.query";

export const useOrdersViewModel = () => {
  const { data: ordersResponse, isLoading } = useGetOrdersQuery();
  const orders = ordersResponse?.orders ?? [];

  return { orders, isLoading };
};
