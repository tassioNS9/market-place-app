import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text className="text-lg font-bold">Olá mundo!</Text>
      <TouchableOpacity onPress={() => router.push("login")}>
        <Text className="text-lg font-bold text-red-500">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
