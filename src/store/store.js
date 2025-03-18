import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/rootReducer";
import authReducer from "../reducers/authReducer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },
});

export default store;
