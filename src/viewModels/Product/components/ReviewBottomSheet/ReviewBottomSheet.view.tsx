import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppButton } from "@/shared/components/AppButton";
import { AppInput } from "@/shared/components/AppInput";
import { colors } from "@/styles/colors";
import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stars } from "./Stars";

export const ReviewBottomSheetView: FC<
  ReturnType<typeof useReviewBottomSheetViewModel>
> = ({ handleContentChange, handleRatingChange, ratingForm }) => {
  return (
    <SafeAreaView edges={["bottom"]} className="bg-background">
      <View className="bg-background rounded-t-2xl">
        <View className="flex-row items-center justify-between p-4">
          <Text className="text-lg font-bold text-gray-900">
            {ratingForm.isEditing ? "Editar avaliação" : "Avaliar produto"}
          </Text>
          <TouchableOpacity className="size-8 items-center justify-center rounded-[10px] border border-gray-400">
            <Ionicons name="close" size={24} color={colors.gray[400]} />
          </TouchableOpacity>
        </View>

        <View className="p-6">
          <Text className="font-semibold text-base text-gray-300">Nota</Text>
          <View className="flex-row items-center mb-6 gap-2">
            <Stars
              handleRatingChange={handleRatingChange}
              rating={ratingForm.rating}
            />
          </View>

          <AppInput
            onChangeText={handleContentChange}
            label="COMENTÁRIO"
            placeholder={
              ratingForm.isEditing
                ? "Edite sua avaliação"
                : "Escreva sua avaliação"
            }
            value={ratingForm.content}
            multiline
            numberOfLines={8}
            textAlign="left"
            containerClassName="mb-8"
            className="h-[150px]"
          />

          <View className="flex-row gap-3 mb-3">
            <AppButton variant="outlined" className="flex-1" onPress={() => {}}>
              Cancelar
            </AppButton>
            <AppButton className="flex-1" onPress={() => {}}>
              {ratingForm.isEditing ? "Atualizar" : "Enviar"}
            </AppButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
