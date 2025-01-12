import { BookResponseDto } from '../dtos/responses/BookResponseDto.ts';
import { baseRepoAPI } from '../../classes/base-repo-api.ts';

class BookRepoApi {
  async findAllBooks(): Promise<BookResponseDto> {
    return await baseRepoAPI.get('find-all');
  }
}

export const bookRepoApi = new BookRepoApi();
