import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ProductsGrid from "./components/ProductsGrid";
import CategoriesList from "./components/CategoriesList";

const App = () => {
  return (
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
  );
};
export default App;
