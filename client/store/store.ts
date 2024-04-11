import { configureStore } from "@reduxjs/toolkit";
import BookListReducer from "../slice/BookListSlice";

const store = configureStore({
  reducer: {
    bookList: BookListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
