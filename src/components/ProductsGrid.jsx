import { Grid, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
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
          <Heading>{product.title}</Heading>
        </GridItem>
      ))}
    </Grid>
  );
};
export default ProductsGrid;
