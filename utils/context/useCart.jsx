import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.key === item.key);

    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad en 1
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...item, quantity: 1 }]));
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
