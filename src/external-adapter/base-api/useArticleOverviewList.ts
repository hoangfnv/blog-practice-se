import { BlogServerErrorCode } from "@/external-adapter/base-api/type";
import { ExternalFetchResult, ExternalFetchResultStatus, FetchOption } from "@/external-adapter/external-adapter-type";
import { QueryKeyFactory } from "@/external-adapter/react-query/queryKeyFactory.ts";
import { fetchArticleOverviewList } from "@/external-resource/blog-server/fetchArticleOverviewList.ts";
import { useQuery } from "@tanstack/react-query";

export type ArticleOverview = {
  id: string,
  title: string,
  description: string,
  createAt: number,
  tags: string[],
}

export function useArticleOverviewList(option?: FetchOption): ExternalFetchResult<ArticleOverview[], BlogServerErrorCode> {
  const query = useQuery<ArticleOverview[], BlogServerErrorCode>({
    queryKey: QueryKeyFactory.articleOverviewList(),
    queryFn: fetchArticleOverviewList,
    ...(option || {}),
  })

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
