import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./features/searchSlice";
import ContributeSlice from "./features/contributeSlice";

export const store = configureStore({
  reducer: {
    search: SearchReducer,
    contribute: ContributeSlice,
  },
});
