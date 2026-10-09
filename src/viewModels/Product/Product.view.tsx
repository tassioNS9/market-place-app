import { FC } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProductViewModel } from "./useProduct.viewModel";
import { Header } from "./components/Header";

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  isLoading,
  productDetails,
  error,
}) => {
  if (error) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>;
  }
  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (!productDetails) {
    return null;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={() => <Header productDetails={productDetails} />}
        ListHeaderComponent={() => (
          <>
            <Text>{productDetails?.name}</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};
