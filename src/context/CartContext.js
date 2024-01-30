// src/context/CartContext.js

import React, { createContext, useReducer, useState } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalCost: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
          totalCost: state.totalCost + action.payload.price,
        };
        case 'REMOVE_ITEM':
            const updatedItems = state.items.filter(item => item.name !== action.payload.name);
            const updatedTotalCost = updatedItems.reduce((total, item) => total + item.price, 0);
            return {
              ...state,
              items: updatedItems,
              totalCost: updatedTotalCost,
            };
      // ... other cases
      default:
        return state;
    }
  };
  
  export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [notification, setNotification] = useState({ show: false, message: '' });
  
    const showNotification = (message) => {
      setNotification({ show: true, message });
      setTimeout(() => {
        setNotification({ show: false, message: '' });
      }, 3000); // Notification disappears after 3 seconds
    };
  
    return (
      <CartContext.Provider value={{ state, dispatch, notification, showNotification }}>
        {children}
      </CartContext.Provider>
    );
  };

export default CartContext;
