import axios from "axios";
import { useEffect, useState } from "react";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <ul>
      {products &&
        products.map((product) => <li key={product.id}>{product.title}</li>)}
    </ul>
  );
};
export default ProductsGrid;
