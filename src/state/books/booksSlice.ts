import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookValue {
  bookName: string;
  highlightText: string;
  id: number;
}
interface BooksState {
  books: BookValue[];
}
const initialState: BooksState = {
  books: [
    { bookName: 'Alice', highlightText: 'Alice', id: 1 },
    { bookName: 'Ted', highlightText: 'Ted', id: 2 },
    { bookName: 'Jack', highlightText: 'Jack', id: 3 },
    { bookName: 'Micah', highlightText: 'Micah', id: 4 },
  ],
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
