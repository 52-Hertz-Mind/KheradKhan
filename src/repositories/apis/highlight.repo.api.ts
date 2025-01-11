import { baseRepoAPI } from '../../classes/base-repo-api.ts';

import { HighlightResponseDto } from '../dtos/responses/HighlightResponseDto.ts';
import { CreateHighlightRequestDto } from '../dtos/requests/CreateHighlightRequestDto.ts';

class HighlightRepoApi {
  async findHighlightsByBookId(
    bookId: string
  ): Promise<HighlightResponseDto[]> {
    return await baseRepoAPI.get(
      `/highlight/find-highlights-by-book-id/${bookId}`
    );
  }

  async createHighlight(
    body: CreateHighlightRequestDto
  ): Promise<HighlightResponseDto> {
    return await baseRepoAPI.post<HighlightResponseDto>(
      '/highlight/create-highlight',
      body
    );
  }
}

export const highlightRepoApi = new HighlightRepoApi();
