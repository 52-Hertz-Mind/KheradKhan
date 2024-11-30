import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookValue {
  bookName: string;
  highlightText: string[];
  bookImage?: string;
  id: string;
}
interface BooksState {
  books: BookValue[];
}
const initialState: BooksState = {
  books: [
    {
      bookName: 'بی‌شعوری',
      highlightText: [
        'بی‌شعوری، نوعی اختلال رفتاری است که فرد در اثر آن نمی‌تواند با دیگران به شکلی محترمانه و انسانی رفتار کند.',
        'بی‌شعوری فقط به دیگران آسیب نمی‌رساند؛ به خود فرد نیز صدمه می‌زند.',
        'اولین قدم برای درمان بی‌شعوری، پذیرش این است که مشکلی وجود دارد.',
      ],
      bookImage: '/bookImageSample.png',
      id: '1',
    },
    {
      bookName: 'هنر شفاف اندیشیدن',
      highlightText: [
        'ما انسان‌ها معمولاً بیشتر به احساساتمان وابسته‌ایم تا به تفکر منطقی، و این موضوع تصمیم‌گیری‌های ما را تحت تأثیر قرار می‌دهد.',
        'بیشتر اشتباهات ما ناشی از تعصب‌های فکری و ذهنی ماست.',
        'اندیشیدن شفاف به معنای جدا کردن احساسات از واقعیت‌ها است.',
      ],
      bookImage: '/bookImageSample.png',
      id: '2',
    },
    {
      bookName: 'انسان در جستجوی معنا',
      highlightText: [
        'معنای زندگی در شرایط سخت، در توانایی ما برای یافتن هدفی عمیق‌تر نهفته است.',
        'آزادی نهایی انسان، انتخاب نگرش خود در هر شرایطی است.',
        'حتی در تاریک‌ترین لحظات، زندگی می‌تواند معنا داشته باشد.',
      ],
      bookImage: '/bookImageSample.png',
      id: '3',
    },
    {
      bookName: 'چه کسی پنیر مرا جابجا کرد؟',
      highlightText: [
        'تغییر اجتناب‌ناپذیر است، و کسانی که با آن تطبیق پیدا کنند، موفق‌تر خواهند بود.',
        'موفقیت در گرو جستجوی مداوم برای پنیر جدید است.',
        'ترس از تغییر بزرگ‌ترین مانع پیشرفت است.',
      ],
      bookImage: '/bookImageSample.png',
      id: '4',
    },
    {
      bookName: 'اثر مرکب',
      highlightText: [
        'تغییرات کوچک روزانه می‌توانند به موفقیت‌های بزرگ منجر شوند.',
        'پیشرفت تدریجی و مداوم کلید موفقیت پایدار است.',
        'عادت‌های کوچک و به ظاهر بی‌اهمیت، به مرور زمان نتایج بزرگ ایجاد می‌کنند.',
      ],
      bookImage: '/bookImageSample.png',
      id: '5',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookValue>) => {
      const existingBookIndex = state.books.findIndex(
        (book) => book.id === action.payload.id
      );

      if (existingBookIndex !== -1) {
        // If the book already exists, append the highlights
        state.books[existingBookIndex].highlightText.push(
          ...action.payload.highlightText
        );
      } else {
        // If the book doesn't exist, add a new one
        state.books.push(action.payload);
      }
    },
  },
});
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
