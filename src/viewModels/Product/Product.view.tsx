import { FC } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProductViewModel } from "./useProduct.viewModel";
import { Header } from "./components/Header";
import { CommentItem } from "./components/CommentItem";
import { ListFooter } from "./components/ListFooter";
import { EmptyList } from "./components/EmptyList";
import { Loading } from "./components/Loading";
import { ProductError } from "./components/Error";
import { AddToCardFooter } from "./components/AddToCartFooter";

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  isLoading,
  productDetails,
  error,
  comments,
  isLoadingComments,
  errorComments,
  handleLoadMore,
  handleRefetch,
  handleEndReached,
  isRefetching,
  isFetchingNextPage,
}) => {
  console.log(comments, "comments");
  if (error) {
    return <ProductError />;
  }

  if (isLoading || !productDetails) {
    return <Loading />;
  }

  return (
    // o edges={["top"]} é para que o conteúdo não fique embaixo da barra de status do celular
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={<Header productDetails={productDetails} />}
        className="px-6"
        onEndReached={handleEndReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        ListFooterComponent={() => (
          <ListFooter isLoadingMore={isFetchingNextPage} />
        )}
        ListEmptyComponent={<EmptyList isLoadingComments={isLoadingComments} />}
        contentContainerClassName="pb-6"
      />
      <AddToCardFooter product={productDetails} />
    </SafeAreaView>
  );
};
