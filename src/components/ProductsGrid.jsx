import useProducts from "../hooks/useProducts";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { products, error, isLoading } = useProducts();

  if (error) return <Text color="red.600">{error.message}</Text>;

  if (isLoading) return <p>Loading...</p>;

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
