import { useCallback, useState } from 'react';
import { BookDataModel } from '../../models/bookData.model.ts';

import { bookService } from '../services/book.service.ts';

export function useBookService() {
  const [allBooksFetchLoading, setAllBooksFetchLoading] = useState(false);
  const [booksData, setBooksData] = useState<BookDataModel[]>(null);

  const fetchBooksData = useCallback(async () => {
    setAllBooksFetchLoading(true);
    try {
      const data = await bookService.findAllBooks();
      setBooksData(data);
    } finally {
      setAllBooksFetchLoading(false);
    }
  }, []);
  return { allBooksFetchLoading, booksData, fetchBooksData };
}
