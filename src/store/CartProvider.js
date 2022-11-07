import CartContext from "./cart-context";
import React, { useReducer, useEffect } from "react";

// const defaultCartState = {
//   items: JSON.parse(localStorage.getItem("Data")) || [],
//   totalAmount: 0,
//   units: JSON.parse(localStorage.getItem("Data")).length || 0,
const defaultCartState = {
  items: [],
  totalAmount: 0,
  units: 0,
};
function reducerFn(state, action) {
  if (action.type === "ADD") {
    const updatedTotal =
      state.totalAmount + action.iteam.price * action.iteam.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.iteam.id
    );
    console.log(existingCartItemIndex);
    console.log(state.items);

    let updatedItems;

    if (existingCartItemIndex !== -1) {
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = {
        ...state.items[existingCartItemIndex],
        amount: state.items[existingCartItemIndex].amount + action.iteam.amount,
      };
    } else {
      updatedItems = state.items.concat(action.iteam);
    }
    return {
      items: updatedItems,
      totalAmount: +updatedTotal.toFixed(2),
      units: updatedItems.reduce((acc, curr) => acc + +curr.amount, 0),
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
    }
    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount.toFixed(2),
      units: updatedItems.reduce((acc, curr) => acc + +curr.amount, 0),
    };
  }

  if (action.type === "DELETE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingItem.price * existingItem.amount;

    const updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount.toFixed(2),
      units: updatedItems.reduce((acc, curr) => acc + +curr.amount, 0),
    };
  }

  return defaultCartState;
}
const CartProvider = (props) => {
  const [cartState, cartStateFn] = useReducer(reducerFn, defaultCartState);
  // useEffect(() => {
  //   window.localStorage.setItem("Data", JSON.stringify(cartState.items));
  // }, [cartState.items]);

  const addItemToCartHandler = (iteamObj) => {
    const upated = { ...iteamObj, amount: 1 };
    cartStateFn({ type: "ADD", iteam: upated });
  };

  const removeItemFromCartHandler = (id) => {
    cartStateFn({ type: "REMOVE", id });
  };

  const deleteItemFromCartHandler = (id) => {
    cartStateFn({ type: "DELETE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    units: cartState.units,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
