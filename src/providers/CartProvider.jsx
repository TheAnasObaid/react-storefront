import { useState } from "react";
import CartContext from "../context/CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([{}]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
