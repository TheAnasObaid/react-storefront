import useProducts from "../hooks/useProducts";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import CategoryContext from "../context/CategoryContext";
import QueryContext from "../context/QueryContext";

const ProductsGrid = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const { searchQuery } = useContext(QueryContext);

  const { products, error, isLoading } = useProducts(
    selectedCategory,
    searchQuery
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <Text color="red.600">{error.message}</Text>;

  return (
    <Grid
      templateColumns={{
        sm: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={3}
    >
      {products.map((product) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default ProductsGrid;
