import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import { useEffect, useState } from 'react';
import HighlightCard from '../components/HighlightCard.tsx';

function Review() {
  const books = useSelector((state: RootState) => state.books.books);
  const [randomHighlights, setRandomHighlights] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function getRandomHighlights(count: number): string[] {
    const allHighlights: string[] = [];
    books.flatMap((book) => {
      book.highlightText.map((highlight) => {
        allHighlights.push(highlight);
      });
    });
    const shuffledHighlights = allHighlights.sort(() => 0.5 - Math.random());
    // console.log(shuffledHighlights);
    return shuffledHighlights.slice(0, count);
  }
  function handleNextHighlight() {
    setCurrentIndex((preIndex) => preIndex + 1);
  }

  useEffect(() => {
    const highlights = getRandomHighlights(3);
    setRandomHighlights(highlights);
  }, [books]);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-gray-200"
      dir="rtl"
    >
      {currentIndex < randomHighlights.length ? (
        <>
          <HighlightCard
            id={`${randomHighlights![currentIndex]}`}
            highlight={randomHighlights![currentIndex]}
          />
          <button
            className="bg-blue-700 w-32 h-fit rounded-2xl text-white p-2"
            onClick={handleNextHighlight}
          >
            هایلایت بعدی
          </button>
        </>
      ) : (
        <HighlightCard
          id={'2'}
          highlight={'تعداد مرور هایلایت های امروز تموم شد🥳'}
        />
      )}
    </div>
  );
}

export default Review;
