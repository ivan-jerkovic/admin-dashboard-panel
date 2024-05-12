export class HttpResponse<T = void> {
  message!: string;
  payload!: T;
}
