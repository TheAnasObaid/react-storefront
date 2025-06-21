import useProducts from "../hooks/useProducts";
import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const products = useProducts();

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
