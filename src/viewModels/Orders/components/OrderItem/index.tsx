import { FC } from "react";
import { Image, Text, View } from "react-native";
import { OrderInterface } from "@/shared/interfaces/order";
import { format } from "date-fns";
import { AppPriceText } from "@/shared/components/AppPriceText";

interface OrderItemParams {
  order: OrderInterface;
}

export const OrderItem: FC<OrderItemParams> = ({ order }) => {
  return (
    <View className="flex-row items-center bg-white p-1 mb-3 rounded-lg">
      <Image
        source={{ uri: order.productPhoto }}
        className="h-[81px] w-[88px] rounded-lg mr-4"
        resizeMode="cover"
      />

      <View className="flex-1 justify-between py-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text
            className="text-sm font-semibold text-gray-900 flex-1"
            numberOfLines={1}
          >
            {order.productName}
          </Text>

          <Text className="text-sm text-gray-600">
            {format(order.createdAt, "dd/MM/yyyy")}
          </Text>
        </View>
        <View className="flex-row items-center mb-1">
          <Text className="text-sm text-gray-600 mr-1">
            {order.quantity} {order.quantity > 1 ? "Unidades" : "Unidade"} •
          </Text>
          <AppPriceText
            value={order.totalPrice}
            classNameCurrency="text-sm text-gray-600"
            classNameValue="text-sm text-gray-600"
          />
        </View>
        <Text className="text-sm text-gray-600">
          Cartão final {order.creditCard.maskedNumber.slice(-4)}
        </Text>
      </View>
    </View>
  );
};
