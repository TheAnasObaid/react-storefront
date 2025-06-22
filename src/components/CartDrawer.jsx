import {
  Button,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton variant="plain">
          <PiShoppingCartSimple />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>My Cart</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>{/* TODO: Add products here */}</Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Place Order</Button>
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
