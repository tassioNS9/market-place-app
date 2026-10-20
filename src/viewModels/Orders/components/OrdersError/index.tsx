import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { AppButton } from "@/shared/components/AppButton";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

export const OrdersError = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="items-center justify-center gap-3">
        <View className="bg-danger/10 p-4 rounded-full">
          <Ionicons name="alert" size={30} color={colors.danger} />
        </View>
        <Text className="text-xl font-medium text-danger">
          Erro ao carregar pedidos
        </Text>
      </View>

      <AppButton onPress={() => router.push("/home")} className="mt-12 w-fit">
        Voltar para produtos
      </AppButton>
    </View>
  );
};
