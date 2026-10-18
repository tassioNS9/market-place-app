import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrdersViewModel } from "./useOrders.viewModel";
import { FC } from "react";

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({
  ordersData,
  isLoading,
  error,
}) => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 p-8 flex-col">
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={ordersData?.orders}
          renderItem={({ item }) => <Text>{item.productName}</Text>}
          keyExtractor={({ id }) => `order-list-item-${id}`}
        />
      )}
    </SafeAreaView>
  );
};
