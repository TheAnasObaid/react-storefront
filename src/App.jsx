import { Box, Grid, GridItem } from "@chakra-ui/react";
import CategoriesList from "./components/CategoriesList";
import Navbar from "./components/Navbar";
import ProductsGrid from "./components/ProductsGrid";
import { useState } from "react";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box maxW={1150} marginX="auto" paddingX={3}>
      <Grid templateColumns={{ sm: "1fr", md: "320px 1fr" }} gap={3}>
        <GridItem colSpan="2">
          <Navbar onSearch={(query) => setSearchQuery(query)} />
        </GridItem>
        <GridItem colSpan={{ sm: "2", md: "1" }}>
          <CategoriesList
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </GridItem>
        <GridItem>
          <ProductsGrid
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default App;
