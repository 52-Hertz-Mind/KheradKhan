import { BookPopularityScoreEnum } from '../enums/BookPopularityScoreEnum.ts';

export interface BookResponseDto {
  id: string;
  name: string;
  author: string;
  image?: string;
  popularityScore: BookPopularityScoreEnum;
  createdDate: Date;
  modifiedDate: Date;
}
