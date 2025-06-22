import OrderContext from "../context/OrderContext";
import { useState } from "react";

const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState("");

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
export default OrderProvider;
