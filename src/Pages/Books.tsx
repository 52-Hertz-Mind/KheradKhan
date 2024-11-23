import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import DashboardHeader from '../components/DashboardHeader.tsx';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.tsx';
import { useState } from 'react';

function Books() {
  const books = useSelector((state: RootState) => state.books.books);
  const [selectedBookId, setSelectedBookId] = useState<number>();
  const navigate = useNavigate();

  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col gap-5 p-10 items-center border w-screen h-full">
        {books.map((book, index) => (
          <button
            onClick={() => {
              setSelectedBookId(book.id);
              navigate('/books/highlights', {
                state: { selectedBookId: book.id },
              });
            }}
            className="flex flex-col"
            key={index}
          >
            {book.bookName}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Books;
