import { Box, HStack, Input, InputGroup, Link } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import CartDrawer from "./CartDrawer";

const Navbar = ({ onSearch }) => {
  return (
    <HStack
      paddingY={3}
      justifyContent="space-between"
      borderBottom="1px solid lightgray"
    >
      <Link href="/" fontSize={18} fontWeight={600} colorPalette="black">
        Storefront
      </Link>
      <Box display="flex" gap={2}>
        <InputGroup startElement={<GoSearch />}>
          <Input
            placeholder="Search products"
            onKeyDown={(e) => {
              if (e.key === "Enter") return onSearch(e.target.value);
            }}
          />
        </InputGroup>
        <CartDrawer />
      </Box>
    </HStack>
  );
};
export default Navbar;
