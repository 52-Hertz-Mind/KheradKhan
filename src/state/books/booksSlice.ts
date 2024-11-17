import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookState {
  bookName: string;
  highlightText: string;
}
const initialState: BookState[] = [];
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookState>) => {
      state.push(action.payload);
    },
  },
});
export default booksSlice.reducer;
