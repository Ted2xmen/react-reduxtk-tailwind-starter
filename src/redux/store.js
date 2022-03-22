import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import link from "./link/linkSlice";

export const store = configureStore({
  reducer: {
    counter,
    link,
  },
});
