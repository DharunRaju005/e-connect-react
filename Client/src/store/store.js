import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    user: rootReducer,
  },
});

export default store;
