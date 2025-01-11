import { highlightRepoApi } from '../apis/highlight.repo.api.ts';
import { CreateHighlightRequestDto } from '../dtos/requests/CreateHighlightRequestDto.ts';
import { HighlightModel } from '../../models/highlight.model.ts';
import { HighlightResponseDto } from '../dtos/responses/HighlightResponseDto.ts';
import { BookModel } from '../../models/book.model.ts';

class HighlightService {
  // region Request methods
  public async createHighlight(
    highlight: string,
    bookName?: string,
    bookId?: string
  ): Promise<HighlightModel> {
    const body = this._convertCreateHighlightModelToCreateHighlightRequestDto(
      highlight,
      bookName,
      bookId
    );
    const response: HighlightResponseDto =
      await highlightRepoApi.createHighlight(body);
    return this._convertHighlightResponseDtoToHighlightModel(response);
  }
  public async findHighlightsByBookId(bookId: string): Promise<BookModel> {
    const response = await highlightRepoApi.findHighlightsByBookId(bookId);
    return this._convertHighlightResponseDtoListToBookModel(response);
  }
  // endregion

  // region Adapter methods
  private _convertCreateHighlightModelToCreateHighlightRequestDto(
    highlight: string,
    bookName: string,
    bookId: string
  ): CreateHighlightRequestDto {
    return { text: highlight, name: bookName, bookId };
  }

  private _convertHighlightResponseDtoToHighlightModel(
    response: HighlightResponseDto
  ): HighlightModel {
    return {
      id: response.highlight.id,
      bookId: response.book.id,
      highlightText: response.highlight.text,
      bookName: response.book.name,
    };
  }

  private _convertHighlightResponseDtoListToBookModel(
    response: HighlightResponseDto[]
  ): BookModel {
    return {
      id: response[0].book.id,
      name: response[0].book.name,
      highlightTexts: response.map((res) => res.highlight.text),
    };
  }
  //   endregion
}

export const highlightService = new HighlightService();
