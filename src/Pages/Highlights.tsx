import DashboardHeader from '../components/DashboardHeader.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import Footer from '../components/Footer.tsx';
import { useLocation } from 'react-router-dom';

function Highlights() {
  const location = useLocation();
  const { selectedBookId } = location.state || {};
  const books = useSelector((state: RootState) => state.books.books);

  const filteredBooks = books.filter((book) => book.id === selectedBookId);
  return (
    <div>
      <DashboardHeader />
      <div className="p-10">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              className="size-1/3 h-96 m-auto mt-10 mb-10 text-white rounded-2xl p-10 bg-gray-600"
              key={book.id}
            >
              <p>{book.highlightText}</p>
              <p>{book.id}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No highlights found for this book.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Highlights;
