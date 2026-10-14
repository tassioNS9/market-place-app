import { FC } from "react";
import { View } from "react-native";
import { AppButton } from "@/shared/components/AppButton";
import { AppPriceText } from "@/shared/components/AppPriceText";
import { ProductInterface } from "@/shared/interfaces/product";
import { SafeAreaView } from "react-native-safe-area-context";

interface AddToCardFooterParams {
  product: ProductInterface;
  handleAddToCart: () => void;
}

export const AddToCardFooter: FC<AddToCardFooterParams> = ({
  product,
  handleAddToCart,
}) => {
  return (
    <SafeAreaView edges={["bottom"]} className="bg-white/40">
      <View className="fixed justify-between items-center   bottom-0 right-0 left-0 p-7 h-[96px] flex-row">
        <AppPriceText value={Number(product.value)} />

        <AppButton
          onPress={handleAddToCart}
          leftIcon="cart-outline"
          className="w-[120px] h-[40px]"
        >
          Adicionar
        </AppButton>
      </View>
    </SafeAreaView>
  );
};
