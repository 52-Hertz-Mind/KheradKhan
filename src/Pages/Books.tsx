import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import DashboardHeader from '../components/DashboardHeader.tsx';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.tsx';

function Books() {
  const books = useSelector((state: RootState) => state.books.books);
  // const [selectedBookId, setSelectedBookId] = useState<number>();
  const navigate = useNavigate();

  //region function
  function navigateToBook(id: number) {
    navigate('/books/highlights', {
      state: {
        selectedBookId: id,
      },
    });
  }

  //endregion

  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col gap-5 p-10 items-center border w-screen h-full">
        {books.map((book, index) => (
          <button
            onClick={() => {
              navigateToBook(book.id);
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
