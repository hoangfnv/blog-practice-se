export type BlogServerErrorCode = 'WrongResponseType' | 'LackOfParam'
export type BlogServerApiResponse<T, U = undefined> = {
  status: 'success',
  data: T,
  metadata: U,
}
| {
  status: 'error',
  errorCode: BlogServerErrorCode,
  detail: string,
}
