import useProducts from "../hooks/useProducts";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ selectedCategory }) => {
  const { products, error, isLoading } = useProducts(selectedCategory);

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
