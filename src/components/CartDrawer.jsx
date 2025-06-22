import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Float,
  IconButton,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import CartContext from "../context/CartContext";
import OrderContext from "../context/OrderContext";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { order, setOrder } = useContext(OrderContext);

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton variant="plain">
          <Box position="relative">
            <Float placement="top-end">{cartItems.length - 1}</Float>
            <PiShoppingCartSimple />
          </Box>
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>My Cart</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <VStack gap={5} alignItems="flex-start">
                {cartItems?.map((item) => (
                  <VStack key={item.id} gap={3} alignItems="flex-start">
                    <Text fontSize={16}>{item.title}</Text>
                    {item.price && (
                      <Text fontSize={20} fontWeight="bold">
                        ${item.price}
                      </Text>
                    )}
                  </VStack>
                ))}
              </VStack>
            </Drawer.Body>
            <Drawer.Footer>
              {order ? (
                <Text>{order}</Text>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setCartItems([{}]);
                      setOrder(
                        "Your order has been placed! Please wait for the delivery."
                      );
                    }}
                  >
                    Place Order
                  </Button>
                </>
              )}
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
export default CartDrawer;
