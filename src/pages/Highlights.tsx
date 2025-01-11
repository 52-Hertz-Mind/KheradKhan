import Footer from '../components/Footer.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HighlightCard from '../components/HighlightCard.tsx';
import { useHighlightService } from '../repositories/hooks/useHighlightService.ts';
import { useEffect } from 'react';

function Highlights() {
  const { bookId } = useParams();

  const navigate = useNavigate();
  // const books = useSelector((state: RootState) => state.books.books);
  const { bookData: book, fetchBookData } = useHighlightService();
  // const filteredBooks = books.filter((book) => book.id === id);
  useEffect(() => {
    console.log('before fetching on Highlights');
    console.log(bookId);
    const fetchData = async () => {
      console.log('useEffect on Highlights');
      await fetchBookData(bookId);
    };
    fetchData().then();
  }, [fetchBookData]);
  if (!book) return null;
  return (
    <div className="bg-gray-200">
      <div className="px-96 pt-10 flex items-center justify-between" dir="rtl">
        <button onClick={() => navigate('/books')}>
          <FontAwesomeIcon className="size-8" icon={faArrowRight} />
        </button>
      </div>
      <div className="p-10 flex flex-col justify-center items-center" dir="rtl">
        <p className="font-bold text-2xl">{book.name}</p>
        {book.highlightTexts.length > 0 ? (
          <div className="w-screen" dir="rtl">
            {book.highlightTexts.map((text) => (
              <HighlightCard id={book.id} highlight={text} />
            ))}
          </div>
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
