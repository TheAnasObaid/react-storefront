import QueryContext from "../context/QueryContext";
import { useState } from "react";

const QueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <QueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
export default QueryProvider;
