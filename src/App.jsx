import { Box, Grid, GridItem } from "@chakra-ui/react";
import CategoriesList from "./components/CategoriesList";
import Navbar from "./components/Navbar";
import ProductsGrid from "./components/ProductsGrid";
import CartProvider from "./providers/CartProvider";
import QueryProvider from "./providers/QueryProvider";
import CategoryProvider from "./providers/CategoryProvider";
import OrderProvider from "./providers/OrderProvider";

const App = () => {
  return (
    <CartProvider>
      <QueryProvider>
        <CategoryProvider>
          <OrderProvider>
            <Box maxW={1150} marginX="auto" paddingX={3}>
              <Grid templateColumns={{ sm: "1fr", md: "320px 1fr" }} gap={3}>
                <GridItem colSpan="2">
                  <Navbar />
                </GridItem>
                <GridItem colSpan={{ sm: "2", md: "1" }}>
                  <CategoriesList />
                </GridItem>
                <GridItem>
                  <ProductsGrid />
                </GridItem>
              </Grid>
            </Box>
          </OrderProvider>
        </CategoryProvider>
      </QueryProvider>
    </CartProvider>
  );
};
export default App;
