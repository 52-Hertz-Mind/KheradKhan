import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import { useState } from 'react';

function Review() {
  const books = useSelector((state: RootState) => state.books.books);
  const [randomHighlights, setRandomHighlights] = useState();

  function getRandomHighlights(): string[] {
    const allHighlights = [];
    books.map((book) => {
      allHighlights.push(book.highlightText);
    });
    console.log(allHighlights);
    return allHighlights;
  }

  return <div>{getRandomHighlights()}</div>;
}
export default Review;
