import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: "популярности",
    sortProp: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },

    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.sortType = action.payload.sortType;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});
export const selectSort = (state) => state.filter.sortType;
export const selectFilter = (state) => state.filter;
export const {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setFilters,
  setInputValue,
} = filterSlice.actions;

export default filterSlice.reducer;
