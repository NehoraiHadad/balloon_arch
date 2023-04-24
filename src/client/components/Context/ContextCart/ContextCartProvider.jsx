import { createContext, useState } from "react";

export const CartContext = createContext();

export const ContextCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setTotalCost(totalCost + item.price);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalCost,
        setTotalCost,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
