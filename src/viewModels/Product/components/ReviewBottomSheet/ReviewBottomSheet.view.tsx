import { FC } from "react";
import { Text, View } from "react-native";
import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel";

export const ReviewBottomSheetView: FC<
  ReturnType<typeof useReviewBottomSheetViewModel>
> = ({}) => {
  return (
    <View className="flex-1 items-center justify-center h-20">
      <Text>Review do produto</Text>
    </View>
  );
};
