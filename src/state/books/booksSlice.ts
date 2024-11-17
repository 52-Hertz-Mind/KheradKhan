import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookValue {
  bookName: string;
  highlightText: string;
}
interface BooksState {
  books: BookValue[];
}
const initialState: BooksState = {
  books: [],
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookValue>) => {
      state.books.push(action.payload);
    },
  },
});
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
