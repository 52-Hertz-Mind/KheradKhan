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
    <>
      <DashboardHeader />
      <div dir="rtl" className="flex flex-col items-start">
        <div className="size-1/2 mx-auto mt-10">
          <h1 className="text-5xl ">کتاب ها</h1>
        </div>
        <div className="grid grid-cols-4 gap-5 py-20 px-96 items-center w-screen h-full">
          {books.map((book, index) => (
            <div
              className="flex flex-col gap-5 size-full border p-10 cursor-pointer shadow hover:shadow-2xl duration-300"
              onClick={() => {
                navigateToBook(book.id);
              }}
            >
              <img src={book.bookImage} alt={book.bookName} />
              <p className="flex flex-col" key={index}>
                {book.bookName}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Books;
