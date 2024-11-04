export type BlogServerErrorCode = 'Err1' | 'Err2'
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
