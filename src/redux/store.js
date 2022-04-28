import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import links from "./links/linkSlice";

export const store = configureStore({
  reducer: {
    counter,
    links,
  },
});
