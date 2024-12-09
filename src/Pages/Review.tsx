import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import { useEffect, useState } from 'react';

function Review() {
  const books = useSelector((state: RootState) => state.books.books);
  const [randomHighlights, setRandomHighlights] = useState<string[]>();
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
    <div className="flex flex-col items-center justify-center" dir="rtl">
      {currentIndex < randomHighlights?.length ? (
        <div className="flex flex-col gap-5 p-20 size-1/2 bg-gray-200 mt-10 rounded-2xl shadow-xl hover:shadow-2xl duration-300">
          <p>{randomHighlights[currentIndex]}</p>
          <button
            className="bg-blue-700 w-32 h-fit rounded-2xl text-white p-2"
            onClick={handleNextHighlight}
          >
            هایلایت بعدی
          </button>
        </div>
      ) : (
        <div className="flex p-20 size-1/2 bg-gray-200 mt-10 rounded-2xl shadow-xl hover:shadow-2xl duration-300">
          همه هایلایت‌ها نمایش داده شده‌اند 🎉
        </div>
      )}
    </div>
  );
}

export default Review;
