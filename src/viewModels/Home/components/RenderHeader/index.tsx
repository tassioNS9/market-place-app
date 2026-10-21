import { memo } from "react";
import { HomeHeader } from "../Header";
import { SearchInput } from "../SearchInput";
import { SafeAreaView } from "react-native-safe-area-context";

export const RenderHeader = memo(
  ({
    searchInputText,
    setSearchInputText,
  }: {
    searchInputText: string;
    setSearchInputText: (text: string) => void;
  }) => (
    <SafeAreaView edges={["top"]} className="px-4">
      <HomeHeader />
      <SearchInput
        setSearchInputText={setSearchInputText}
        inputValue={searchInputText}
      />
    </SafeAreaView>
  ),
);
