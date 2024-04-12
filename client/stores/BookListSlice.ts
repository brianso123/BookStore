import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface Book {
  id: string;
  name: string;
  price: string;
  category: "Biography" | "Classics" | "Philosophy" | "Fiction";
  desc: string;
}

type BookListState = Book[];

// some random books as the initial state
const initialState: BookListState = [
  {
    id: "1",
    name: "Steve Jobs",
    price: "50",
    category: "Biography",
    desc: "Steve Jobs is the authorized self-titled biography of American business magnate and Apple co-founder Steve Jobs. ",
  },
  {
    id: "2",
    name: "Pride and Prejudice",
    price: "30",
    category: "Classics",
    desc: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813.",
  },
  {
    id: "3",
    name: "Beyond Good and Evil",
    price: "25",
    category: "Philosophy",
    desc: "Beyond Good and Evil: Prelude to a Philosophy of the Future is a book by philosopher Friedrich Nietzsche that covers ideas in his previous work Thus Spoke Zarathustra but with a more polemical approach.",
  },
  {
    id: "4",
    name: "The Da Vinci Code",
    price: "40",
    category: "Fiction",
    desc: "The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown.",
  },
];

export const BookListSlice = createSlice({
  name: "BookList",
  initialState,
  reducers: {
    // first reducer to add books
    addBook: (state, action: PayloadAction<Book>) => {
      return [...state, action.payload];
    },
    // reducer for deleting books
    deleteBook: (state, action: PayloadAction<Book>) => {
      const newList = state.filter((item) => item.id !== action.payload.id);
      return newList;
    },
    // reducer for updating books
    updateBook: (state, action: PayloadAction<Book>) => {
      const newList = state.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      return newList;
    },
  },
});

export const { addBook, deleteBook, updateBook } = BookListSlice.actions;
export default BookListSlice.reducer;
