import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ContextProductsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("1");

  return (
    <ProductsContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </ProductsContext.Provider>
  );
};
