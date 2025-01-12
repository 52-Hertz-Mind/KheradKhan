import { BookDataModel } from '../../models/bookData.model.ts';
import { bookRepoApi } from '../apis/book.repo.api.ts';
import { BookResponseDto } from '../dtos/responses/BookResponseDto.ts';

class BookService {
  // region Request methods
  public async findAllBooks(): Promise<BookDataModel[]> {
    const response = await bookRepoApi.findAllBooks();
    return response.map(this._convertBookResponseDtoToBookDataModel);
  }
  // endregion
  // region Adapter methods
  private _convertBookResponseDtoToBookDataModel(
    response: BookResponseDto
  ): BookDataModel {
    return {
      id: response.id,
      name: response.name,
      author: response.author,
      image: response.image,
      popularityScore: response.popularityScore,
      createdDate: response.createdDate,
      modifiedDate: response.modifiedDate,
    };
  }
  // endregion
}

export const bookService = new BookService();
