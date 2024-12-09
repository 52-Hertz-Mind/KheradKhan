import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import { useEffect, useState } from 'react';

function Review() {
  const books = useSelector((state: RootState) => state.books.books);
  const [randomHighlights, setRandomHighlights] = useState<string[]>();

  function getRandomHighlights(count: number): string[] {
    const allHighlights: string[] = [];
    books.flatMap((book) => {
      book.highlightText.map((highlight) => {
        allHighlights.push(highlight);
      });
    });
    const shuffledHighlights = allHighlights.sort(() => 0.5 - Math.random());
    console.log(shuffledHighlights);
    return shuffledHighlights.slice(0, count);
  }

  useEffect(() => {
    const highlights = getRandomHighlights(3);
    setRandomHighlights(highlights);
  }, [books]);

  return (
    <div className="flex flex-col items-center justify-center" dir="rtl">
      {randomHighlights?.map((highlight, index) => (
        <div className="flex p-20 size-1/2 bg-gray-200 mt-10 rounded-2xl shadow-xl hover:shadow-2xl duration-300">
          <p key={index}>{highlight}</p>
        </div>
      ))}
    </div>
  );
}

export default Review;
