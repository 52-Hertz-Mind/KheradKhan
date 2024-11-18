import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import DashboardHeader from '../components/DashboardHeader.tsx';

function Books() {
  const books = useSelector((state: RootState) => state.books.books);
  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col gap-5 p-10 items-center border w-screen h-full">
        {books.map((book, index) => (
          <button className="flex flex-col" key={index}>
            {book.bookName}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Books;
