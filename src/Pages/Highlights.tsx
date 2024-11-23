import DashboardHeader from '../components/DashboardHeader.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import Footer from '../components/Footer.tsx';

function Highlights() {
  const books = useSelector((state: RootState) => state.books.books);
  return (
    <div>
      <DashboardHeader />
      {books.map((book, index) => (
        <div
          className="size-1/3 h-96 m-auto mt-10 mb-10 text-white rounded-2xl  p-10 bg-gray-600"
          key={index}
        >
          <p>{book.highlightText}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}
export default Highlights;
