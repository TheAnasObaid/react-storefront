import { useContext } from "react";
import getColor from "../services/getColor";
import { Badge, Button, Card, Image, Text } from "@chakra-ui/react";
import CartContext from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const color = getColor(product);

  return (
    <Card.Root maxWidth="sm" overflow="hidden">
      <Image
        src={product.thumbnail}
        objectFit="contain"
        alt={product.discription}
      />
      <Card.Body gap="2">
        <Badge width="fit" colorPalette={color}>
          {product.category}
        </Badge>
        <Card.Title>{product.title}</Card.Title>
        <Card.Description>{product.discription}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight">
          ${product.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          variant="solid"
          onClick={() => {
            if (cartItems)
              setCartItems([
                ...cartItems,
                { id: product.id, title: product.title, price: product.price },
              ]);
            else
              setCartItems([
                { id: product.id, title: product.title, price: product.price },
              ]);
          }}
        >
          Add to cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default ProductCard;
