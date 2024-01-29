import React, { createContext, useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  let updatedItems;

  switch (action.type) {
    case "ADD_ITEM": {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existItem = state.items[existItemIndex];

      if (existItem) {
        const updatedItem = {
          ...existItem,
          amount: existItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case "REMOVE_ITEM": {
      const existItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existItem = state.items[existItemIndex];
      const updatedTotalAmount =
        state.totalAmount - existItem.price * existItem.amount;

      if (existItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = { ...existItem, amount: existItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existItemIndex] = updatedItem;
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    default:
      return initialState;
  }
};

export const ItemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const ItemContextProvider = ({ children }) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };

  const itemCtx = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <ItemContext.Provider value={itemCtx}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;
