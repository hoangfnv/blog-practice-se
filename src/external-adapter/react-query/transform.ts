import { ExternalFetchResult, ExternalFetchResultStatus } from "@/external-adapter/externalAdapterType";
import { UseQueryResult } from "@tanstack/react-query";

export function transformQueryResponse<TResult, TError>(query:  UseQueryResult<TResult, TError>): ExternalFetchResult<TResult, TError> {

  let status: ExternalFetchResultStatus = 'not-start'
  if (query.status === 'success') status = 'success'
  if (query.status === 'error') status = 'error'
  if (query.status === 'pending' && query.fetchStatus === 'fetching') status = 'loading'

  return {
    data: query.data,
    status: status,
    error: query.error,
    refetch: query.refetch
  }
}
