import { HighlightPopularityScoreEnum } from '../enums/HighlightPopularityScoreEnum.ts';
import { BookPopularityScoreEnum } from '../enums/BookPopularityScoreEnum.ts';


export interface HighlightResponseDto {
  highlight: HighlightResponseDtoHighlight;
  book: HighlightResponseDtoBook;
}

interface HighlightResponseDtoHighlight {
  id: string;
  text: string;
  pageNumber: number;
  note?: string;
  popularityScore: HighlightPopularityScoreEnum;
  createdDate: Date;
  modifiedDate: Date;
}

interface HighlightResponseDtoBook {
  id: string;
  name: string;
  author: string;
  image?: string;
  popularityScore: BookPopularityScoreEnum;
  createdDate: Date;
  modifiedDate: Date;
}
