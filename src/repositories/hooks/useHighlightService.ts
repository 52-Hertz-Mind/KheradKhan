import { useCallback, useState } from 'react';
import { BookModel } from '../../models/book.model.ts';
import { highlightService } from '../services/highlight.service.ts';
import { HighlightModel } from '../../models/highlight.model.ts';

export function UseHighlightService() {
  const [fetchLoading, setFetchLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [bookData, setBookData] = useState<BookModel>(null);

  const fetchBookData = useCallback(async (bookId: string) => {
    setFetchLoading(true);
    try {
      const data = await highlightService.findHighlightsByBookId(bookId);
      setBookData(data);
    } finally {
      setFetchLoading(false);
    }
  }, []);

  const createHighlight = useCallback(
    async (highlightText: string, bookName?: string, bookId?: string) => {
      setSubmitLoading(true);
      try {
        const newData: HighlightModel = await highlightService.createHighlight(
          highlightText,
          bookName,
          bookId
        );
        await fetchBookData(newData.bookId);
      } finally {
        setSubmitLoading(false);
      }
    },
    []
  );
  return { fetchLoading, submitLoading, bookData };
}
