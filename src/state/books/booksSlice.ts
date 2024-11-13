import { createSlice } from '@reduxjs/toolkit';

interface BookState {
  bookName: string;
  highlightText: string;
}
const initialState: BookState = {
  bookName: '',
  highlightText: '',
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});
export default booksSlice.reducer;
