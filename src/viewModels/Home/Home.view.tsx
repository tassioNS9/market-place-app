import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { ProductCard } from "./components/ProductCard";
import { ProductInterface } from "@/shared/interfaces/product";
import { useHomeViewModel } from "./useHome.viewMode";
import { FC } from "react";

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  products,
  handleEndReached,
}) => {
  const productsList: ProductInterface[] = [
    {
      id: 1,
      value: "100",
      name: "Product 1",
      description: "Description 1",
      photo: "https://picsum.photos/seed/3/600",
      height: "100",
      width: "100",
      weight: "100",
      averageRating: 1,
      views: 1,
      ratingCount: 1,
      categoryId: 1,
      category: { id: 1, name: "Category 1" },
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
      deletedAt: "2021-01-01",
    },
  ];
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        numColumns={2}
        onEndReached={handleEndReached}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListHeaderComponent={
          <>
            <HomeHeader />
            <SearchInput />
          </>
        }
        contentContainerClassName="px-4 pb-[120px]"
      />
    </SafeAreaView>
  );
};
