import DashboardNavbar from '../components/DashboardNavbar.tsx';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.tsx';
import { useEffect } from 'react';
import { useBookService } from '../repositories/hooks/useBookService.ts';

function Books() {
  // const books = useSelector((state: RootState) => state.books.books);
  const {
    booksData: books,
    allBooksFetchLoading,
    fetchBooksData,
  } = useBookService();
  const navigate = useNavigate();

  //region functions
  function navigateToBook(id: string) {
    navigate(`/books/highlights/${id}`);
  }
  //endregion

  useEffect(() => {
    const fetchData = async () => {
      await fetchBooksData();
    };
    fetchData().then();
  }, [fetchBooksData]);

  useEffect(() => {
    console.log('all books', books);
  }, [books]);
  if (!books) return null;
  return (
    <>
      <DashboardNavbar />
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
              <img src={book.image} alt={book.name} />
              <p className="flex flex-col" key={index}>
                {book.name}
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
