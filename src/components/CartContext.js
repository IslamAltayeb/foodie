import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload.index),
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [], 
  });

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: { item } });
  };

  const removeItemFromCart = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { index } });
  };


  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
