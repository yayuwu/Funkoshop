import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );
  const [shippingCost, setShippingCost] = useState(300); 

  const addToCart = (item, quantityToAdd = 1) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.key === item.key);
  
    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantityToAdd;
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      // Si el producto no está en el carrito, agregarlo con la cantidad especificada
      setCartItems([...cartItems, { ...item, quantity: quantityToAdd }]);
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...item, quantity: quantityToAdd }]));
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

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const addItemQuantity = (itemId) => {
    console.log('cartItems antes:', cartItems);
    console.log('stock: ', cartItems.stock)
    const updatedCart = cartItems.map((item) =>
      item.key === itemId && item.quantity < 10
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    console.log('updatedCart:', updatedCart);
    setCartItems(updatedCart);
  };

  const removeItemQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.key === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotalQuantity, getTotalPrice, shippingCost, addItemQuantity, removeItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
