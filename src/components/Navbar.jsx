import { Box, HStack, IconButton, Link } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";

const Navbar = () => {
  return (
    <HStack paddingY={3} justifyContent="space-between">
      <Link href="/" color="black">
        Storefront
      </Link>
      <Box display="flex" gap={2}>
        <IconButton variant="plain">
          <GoSearch />
        </IconButton>
        <IconButton variant="plain">
          <PiShoppingCartSimple />
        </IconButton>
      </Box>
    </HStack>
  );
};
export default Navbar;
