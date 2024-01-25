import React, { createContext, useReducer, useState } from "react";

export const itemContext = createContext();

const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = (item) => {
    // Implement logic to add an item
    // Update items and totalAmount accordingly
  };

  const removeItem = (item) => {
    // Implement logic to remove an item
    // Update items and totalAmount accordingly
  };
  const initialState = {
    items: [],
    totalAmount: 0,
  };

  const itemReducer = (state, action) => {
    return initialState;
  };

  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  return (
    <itemContext.Provider value={{ items, totalAmount, addItem, removeItem }}>
      {children}
    </itemContext.Provider>
  );
};

export default ItemContextProvider;
