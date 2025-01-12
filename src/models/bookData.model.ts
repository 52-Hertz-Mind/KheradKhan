import { BookPopularityScoreEnum } from '../repositories/dtos/enums/BookPopularityScoreEnum.ts';

export interface BookDataModel {
  id: string;
  name: string;
  author: string;
  image?: string;
  popularityScore: BookPopularityScoreEnum;
  createdDate: Date;
  modifiedDate: Date;
}
