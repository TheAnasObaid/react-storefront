import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box maxW={1150} marginX="auto" paddingX={3}>
      <Grid
        templateColumns={{ sm: "1fr", md: "320px 1fr" }}
        templateRows={{ sm: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
      >
        <GridItem colSpan="2">
          <Navbar />
        </GridItem>
        <GridItem colSpan={{ sm: "2", md: "1" }}>Aside</GridItem>
        <GridItem>Main</GridItem>
      </Grid>
    </Box>
  );
};
export default App;
