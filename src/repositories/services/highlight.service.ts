import { ExampleModel } from '../../models/example.model.ts';
import { exampleRepoApi } from '../apis/example.repo.api.ts';
import { ExampleRequestDto } from '../dtos/requests/ExampleRequestDto.ts';
import { HighlightDataModel } from '../../components/ImportScreen.tsx';
import { highlightRepoApi } from '../apis/highlight.repo.api.ts';
import { CreateHighlightRequestDto } from '../dtos/requests/CreateHighlightRequestDto.ts';

class HighlightService {
  // region Request methods
  public async createHighlight(
    highlight: string,
    bookName?: string,
    bookId?: string
  ): HighlightDataModel {
    const body = this._convertCreateHighlightModelToCreateHighlightRequestDto(
      highlight,
      bookName,
      bookId
    );
    const response = await highlightRepoApi.createHighlight(body);
    return this._convert;
  }
  public async getExamples(): Promise<ExampleModel[]> {
    const response = await exampleRepoApi.fetchAllExamples();
    return response.map(this._convertExampleResponseDtoToExampleModel);
  }

  public async getExampleById(id: string): Promise<ExampleModel> {
    const response = await exampleRepoApi.fetchExampleById(id);
    return response && this._convertExampleResponseDtoToExampleModel(response);
  }

  public async createExample(data: ExampleModel): Promise<ExampleModel> {
    const body = this._convertExampleModelToExampleRequestDto(data);
    const response = await exampleRepoApi.createExample(body);
    return response && this._convertExampleResponseDtoToExampleModel(response);
  }

  public async updateExample(
    id: string,
    data: ExampleModel
  ): Promise<ExampleModel> {
    const body = this._convertExampleModelToExampleRequestDto(data);
    const response = await exampleRepoApi.updateExample(id, body);
    return response && this._convertExampleResponseDtoToExampleModel(response);
  }

  public async deleteExample(id: string): Promise<void> {
    await exampleRepoApi.deleteExample(id);
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

  private _convertExampleResponseDtoToExampleModel(
    dto: ExampleRequestDto
  ): ExampleModel {
    return {
      id: dto.id,
      title: dto.name,
      details: dto.description,
    };
  }

  private _convertExampleModelToExampleRequestDto(
    model: ExampleModel
  ): ExampleRequestDto {
    return {
      id: model.id,
      name: model.title,
      description: model.details,
    };
  }
  //   endregion
}

export const highlightService = new HighlightService();
