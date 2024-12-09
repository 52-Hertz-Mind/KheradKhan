import { useEffect, useRef, useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store.ts';
import { addBook } from '../state/books/booksSlice.ts';
import { Autocomplete, TextField } from '@mui/material';

interface Props {
  isOpen: boolean; // Determines if the popup is open
  setIsOpen: (value: boolean) => void; // Function to close the popup
}

interface Book {
  id: string;
  bookName: string;
  highlightText: string[];
}

const ImportScreen: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  // #region 🔥 State Management
  const books = useSelector((state: RootState) => state.books.books);
  const bookDispatch = useDispatch<AppDispatch>();

  const [fileName, setFileName] = useState<string>(
    'هیچ تصویری انتخاب نشده است'
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [highlight, setHighlight] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // #endregion

  // #region 🧮 Utilities
  const existingBook = books.find((book) => book.id === selectedBook?.id);

  const generateUniqueId = (): string => (books.length + 1).toString();

  const addHighlight = (
    bookName: string,
    highlightText: string[],
    id: string
  ) => {
    bookDispatch(addBook({ bookName, highlightText, id }));
  };
  // #endregion

  // #region ✋ Event Handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setFileName(file.name);
        setErrorMessage(null);
      } else {
        setFileName('هیچ تصویری انتخاب نشده است');
        setErrorMessage('لطفاً فقط یک فایل تصویری انتخاب کنید.');
      }
    }
  };

  const importHighlight = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBook) {
      if (existingBook) {
        setIsOpen(false);
        addHighlight(selectedBook.bookName, [highlight], existingBook.id);
      } else {
        setIsOpen(false);
        addHighlight(selectedBook.bookName, [highlight], selectedBook.id);
      }
    }
  };

  const closePopup = () => setIsOpen(false);

  const handleBookSelection = (newValue: string | Book) => {
    if (typeof newValue === 'string') {
      setSelectedBook({
        bookName: newValue,
        highlightText: [highlight],
        id: generateUniqueId(),
      });
    } else if (newValue && typeof newValue === 'object') {
      setSelectedBook(newValue);
    }
  };
  // #endregion

  // #region 📢 Effects
  useEffect(() => {
    console.log('Books updated:', books);
  }, [books]);
  useEffect(() => {
    console.log('selected book is:', selectedBook);
  }, [selectedBook]);
  // #endregion

  // #region ✨ JSX Render
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closePopup}
    >
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-96 h-2/3 w-1/3 bg-white rounded-2xl shadow-2xl p-20 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={importHighlight}
          className="flex flex-col gap-5"
          dir="rtl"
        >
          {/* 📘 Book Name Input */}
          <label htmlFor="bookName">نام کتاب</label>
          <Autocomplete
            value={selectedBook}
            onChange={(event, newValue) => {
              console.log('new value is:', newValue);
              handleBookSelection(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              console.log('new input value is:', newInputValue);
              handleBookSelection(newInputValue);
            }}
            options={books}
            getOptionLabel={(option) => option.bookName || ''}
            renderInput={(params) => (
              <TextField
                {...params}
                label="نام کتاب"
                variant="outlined"
                placeholder="نام کتاب را انتخاب یا وارد کنید"
              />
            )}
            freeSolo
          />

          {/* 📷 Image Upload Section */}
          {!existingBook && (
            <div className="flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                انتخاب تصویر
              </button>
              <span className="text-gray-700">{fileName}</span>
              {errorMessage && (
                <span className="text-red-500">{errorMessage}</span>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          )}

          {/* ✏️ Highlight Input */}
          <label htmlFor="highlight">هایلایت</label>
          <textarea
            required
            placeholder="هایلایت"
            className="p-2 border-2 rounded-2xl h-32 w-full resize-none"
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
          />

          {/* ⬇️ Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-5 mt-10 bg-blue-500 rounded-2xl p-2 text-white hover:bg-blue-700 duration-150"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="size-5 transition-transform duration-300 group-hover:scale-110"
            />
            <p>وارد کردن</p>
          </button>
        </form>

        {/* ❌ Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close sign-in popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
  // #endregion
};

export default ImportScreen;
