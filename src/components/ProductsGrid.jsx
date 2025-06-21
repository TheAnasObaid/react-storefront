import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient, { controller } from "../services/api-client";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiClient
      .get("/products", { signal: controller.signal })
      .then((res) => setProducts(res.data.products));

    return () => controller.abort();
  }, []);

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
