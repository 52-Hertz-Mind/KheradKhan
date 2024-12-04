import { useEffect, useRef, useState } from 'react'; // React hooks for managing state and side effects
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icon for download
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Component to render FontAwesome icons
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks for interacting with the state
import { AppDispatch, RootState } from '../state/store.ts'; // Type definitions for Redux store and dispatch
import { addBook } from '../state/books/booksSlice.ts';
import { Autocomplete, TextField } from '@mui/material'; // Redux action to add a book to the store

// Props interface for the ImportScreen component
interface Props {
  isOpen: boolean; // Determines if the popup is open
  setIsOpen: (value: boolean) => void; // Function to close the popup
}

// ImportScreen functional component
const ImportScreen: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  // Get the list of books from the Redux store
  const books = useSelector((state: RootState) => state.books.books);

  // Get the Redux dispatch function
  const bookDispatch = useDispatch<AppDispatch>();

  // State to manage the input for the book name
  const [bookName, setBookName] = useState('');

  // State to store the selected book's ID
  const [choosedBookId, setChoosedBookId] = useState<string | null>(null);

  //book image handling
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState('هیچ تصویری انتخاب نشده است');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setFileName(file.name); // Update with selected image file name
        setErrorMessage(null); // Clear error if file is valid
      } else {
        setFileName('هیچ تصویری انتخاب نشده است');
        setErrorMessage('لطفاً فقط یک فایل تصویری انتخاب کنید.');
      }
    }
  };

  // State to manage the input for the highlight text
  const [highlight, setHighlight] = useState('');

  const existingBook = books.find((book) => book.bookName === bookName);

  // Function to generate a unique ID for a new book
  const generateUniqueId = () => {
    return (books.length + 1).toString(); // Simple ID generation based on the number of books
  };

  // Function to add a new highlight to the Redux store
  function addHighlight(bookName: string, highlightText: string[], id: string) {
    bookDispatch(addBook({ bookName, highlightText, id })); // Dispatch the action to add a book
  }

  // Function to handle the form submission
  function importHighlight(e: React.FormEvent) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if the entered book name already exists in the list

    if (existingBook) {
      // If the book exists, add the highlight to the existing book
      setIsOpen(false); // Close the popup
      addHighlight(bookName, [highlight], existingBook.id); // Add highlight to the existing book
    } else {
      // If the book doesn't exist, create a new book
      const newId = generateUniqueId(); // Generate a new unique ID
      setIsOpen(false); // Close the popup
      addHighlight(bookName, [highlight], newId); // Add the new book with the highlight
    }
  }

  // Function to close the popup
  function closePopup() {
    setIsOpen(false);
  }

  // Handle changes in the book selection
  const handleBookSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedBook = books.find((book) => book.bookName === e.target.value); // Check if the input value matches an existing book
    setBookName(e.target.value); // Update the book name state
    setChoosedBookId(selectedBook ? selectedBook.id : null); // Update the selected book ID
  };

  // Log the books to the console whenever the books array changes
  useEffect(() => {
    console.log(books); // Useful for debugging
  }, [books]);

  // If the popup is not open, return null (don't render anything)
  if (!isOpen) return null;

  // Render the popup if it's open
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closePopup} // Close the popup when clicking outside of it
    >
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-96 h-2/3 w-1/3 bg-white rounded-2xl shadow-2xl p-20 z-20"
        onClick={(e) => e.stopPropagation()} // Prevent closing the popup when clicking inside it
      >
        <form
          onSubmit={importHighlight} // Call the importHighlight function when the form is submitted
          className="flex flex-col gap-5"
          dir="rtl" // Set the text direction to right-to-left (for Persian language)
        >
          {/* Input for the book name */}
          <label htmlFor="bookName">نام کتاب</label>
          <Autocomplete
            value={choosedBookId}
            onChange={(event, newValue) => {
              setChoosedBookId(newValue); // Update the selected book
            }}
            options={books.map((book) => book.bookName)} // List of book names
            renderInput={(params) => (
              <TextField
                {...params}
                label="نام کتاب" // Label for the input field
                variant="outlined"
                placeholder="نام کتاب را انتخاب یا وارد کنید"
              />
            )}
            freeSolo // Allow users to type a new book name not in the list
          />

          {/*image*/}

          {!existingBook && (
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                انتخاب تصویر
              </button>

              {/* Display file name */}
              <span className="text-gray-700">{fileName}</span>

              {/* Display error message if file type is incorrect */}
              {errorMessage && (
                <span className="text-red-500">{errorMessage}</span>
              )}

              {/* Hidden native file input */}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*" // Accept only image files
                onChange={handleFileChange}
              />
            </div>
          )}

          {/* Input for the highlight text */}
          <label htmlFor="highlight">هایلایت</label>
          <textarea
            required
            placeholder="هایلایت"
            className="p-2 border-2 rounded-2xl h-32 w-full resize-none"
            value={highlight} // Bind the input value to the highlight state
            onChange={(e) => setHighlight(e.target.value)} // Update the state when the input changes
          />

          {/* Submit button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-5 mt-10 bg-blue-500 rounded-2xl p-2 text-white hover:bg-blue-700 duration-150"
          >
            <FontAwesomeIcon
              icon={faDownload} // Render the download icon
              className="size-5 transition-transform duration-300 group-hover:scale-110"
            />
            <p>وارد کردن</p>
          </button>
        </form>

        {/* Close button */}
        <button
          onClick={closePopup} // Call the closePopup function when the button is clicked
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
              d="M6 18L18 6M6 6l12 12" // Cross icon (X)
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImportScreen; // Export the ImportScreen component as the default export
