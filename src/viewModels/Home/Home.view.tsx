import { Text, View } from "react-native";
import { useUserStore } from "@/shared/store/user-store";

export const HomeView = () => {
  const { user } = useUserStore();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-bold">Bem-vindo, {user?.name}</Text>
      <Text className="text-base text-gray-600">{user?.email}</Text>
    </View>
  );
};
