import { ActivityIndicator, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrdersViewModel } from "./useOrders.viewModel";
import { FC } from "react";
import { OrderItem } from "./components/OrderItem";
import { colors } from "@/styles/colors";
import { EmptyList } from "./components/EmptyList";

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({
  orders: ordersData,
  isLoading,
}) => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 ">
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color={colors["purple-base"]} />
        </View>
      ) : (
        <FlatList
          contentContainerClassName="px-[16px] pb-[120px]"
          data={ordersData}
          renderItem={({ item: order }) => <OrderItem order={order} />}
          keyExtractor={({ id }) => `order-list-item-${id}`}
          ListEmptyComponent={<EmptyList />}
        />
      )}
    </SafeAreaView>
  );
};
