import { Button, Card, Image, Text } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Card.Root maxWidth="sm" overflow="hidden">
      <Image src={product.thumbnail} alt={product.discription} />
      <Card.Body gap="2">
        <Card.Title>{product.title}</Card.Title>
        <Card.Description>{product.discription}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight">
          ${product.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default ProductCard;
