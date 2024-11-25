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
    {
      bookName: 'بی‌شعوری',
      highlightText:
        'بی‌شعوری، نوعی اختلال رفتاری است که فرد در اثر آن نمی‌تواند با دیگران به شکلی محترمانه و انسانی رفتار کند.',
      id: 1,
    },
    {
      bookName: 'هنر شفاف اندیشیدن',
      highlightText:
        'ما انسان‌ها معمولاً بیشتر به احساساتمان وابسته‌ایم تا به تفکر منطقی، و این موضوع تصمیم‌گیری‌های ما را تحت تأثیر قرار می‌دهد.',
      id: 2,
    },
    {
      bookName: 'انسان در جستجوی معنا',
      highlightText:
        'معنای زندگی در شرایط سخت، در توانایی ما برای یافتن هدفی عمیق‌تر نهفته است.',
      id: 3,
    },
    {
      bookName: 'چه کسی پنیر مرا جابجا کرد؟',
      highlightText:
        'تغییر اجتناب‌ناپذیر است، و کسانی که با آن تطبیق پیدا کنند، موفق‌تر خواهند بود.',
      id: 4,
    },
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
