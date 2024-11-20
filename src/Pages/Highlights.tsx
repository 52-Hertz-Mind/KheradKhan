import DashboardHeader from '../components/DashboardHeader.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';

function Highlights() {
  const books = useSelector((state: RootState) => state.books.books);
  return (
    <div>
      <DashboardHeader />
      {books.map((book, index) => (
        <div key={index}>
          <p>{book.highlightText}</p>
        </div>
      ))}
    </div>
  );
}
export default Highlights;
