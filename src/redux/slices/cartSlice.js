import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";

const { totalPrice, items } = getCartFromLS();

const initialState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
      state.totalPrice -= findItem.price;
    },
    clearItem: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectCartById = (id) => (state) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addProduct, clearItem, removeItem, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
