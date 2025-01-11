import { baseRepoAPI } from '../../classes/base-repo-api.ts';
import { ExampleResponseDto } from '../dtos/responses/ExampleResponseDto.ts';
import { ExampleRequestDto } from '../dtos/requests/ExampleRequestDto.ts';

class ExampleRepoApi {
  async fetchAllExamples(queryParams?: Record<string, any>): Promise<ExampleResponseDto[]> {
    return await baseRepoAPI.get<ExampleResponseDto[]>('/examples', queryParams) ?? [];
  }

  async fetchExampleById(id: string): Promise<ExampleResponseDto> {
    return await baseRepoAPI.get<ExampleResponseDto>(`/examples/${id}`);
  }

  async createExample(body: ExampleRequestDto, queryParams?: Record<string, any>): Promise<ExampleResponseDto> {
    return await baseRepoAPI.post<ExampleResponseDto>('/examples', body, queryParams);
  }

  async updateExample(id: string, body: Partial<ExampleRequestDto>, queryParams?: Record<string, any>): Promise<ExampleResponseDto> {
    return await baseRepoAPI.patch<ExampleResponseDto>(`/examples/${id}`, body, queryParams);
  }

  async deleteExample(id: string, queryParams?: Record<string, any>): Promise<void> {
    return await baseRepoAPI.delete<void>(`/examples/${id}`, queryParams);
  }
}

export const exampleRepoApi = new ExampleRepoApi();
