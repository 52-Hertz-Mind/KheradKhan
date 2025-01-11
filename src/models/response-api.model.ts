export interface ResponseMessage {
  key: string;
  params?: Record<string, any>;
}

export interface ApiResponse<T> {
  type: 'SUCCESS' | 'FAILURE';
  message?: ResponseMessage;
  data: T | null;
}
