import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import DashboardHeader from '../components/DashboardHeader.tsx';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.tsx';

function Books() {
  const books = useSelector((state: RootState) => state.books.books);
  const navigate = useNavigate();

  //region functions
  function navigateToBook(id: string) {
    navigate(`/books/highlights/${id}`);
  }
  //endregion

  return (
    <div>
      <DashboardHeader />
      <div
        className="grid grid-cols-4 gap-5 p-40 items-center border w-screen h-full"
        dir="rtl"
      >
        {books.map((book, index) => (
          <div
            className="size-full border p-10 cursor-pointer"
            onClick={() => {
              navigateToBook(book.id);
            }}
          >
            <button className="flex flex-col" key={index}>
              {book.bookName}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Books;
