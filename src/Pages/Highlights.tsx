import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import Footer from '../components/Footer.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Highlights() {
  const { id } = useParams();

  const navigate = useNavigate();
  const books = useSelector((state: RootState) => state.books.books);

  const filteredBooks = books.filter((book) => book.id === id);
  return (
    <div className="bg-gray-200">
      <div className="px-96 pt-10 flex items-center justify-between" dir="rtl">
        <button onClick={() => navigate('/books')}>
          <FontAwesomeIcon className="size-8" icon={faArrowRight} />
        </button>
      </div>
      <div className="p-10 flex flex-col justify-center items-center" dir="rtl">
        {filteredBooks.map((book) => (
          <p className="font-bold text-2xl">{book.bookName}</p>
        ))}
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              className="size-1/3 h-96 m-auto mt-10 mb-10 text-gray-800 rounded-2xl p-10 bg-white"
              key={book.id}
            >
              <p>{book.highlightText}</p>
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
