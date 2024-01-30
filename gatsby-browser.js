import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';
import { CartProvider } from './src/context/CartContext';

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
);
