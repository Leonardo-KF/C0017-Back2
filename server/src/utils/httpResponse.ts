export interface IHttpResponse<T> {
  statusCode: number;
  message: string;
  body: T;
}
