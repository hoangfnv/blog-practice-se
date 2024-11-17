import { BlogServerErrorCode } from "@/external-adapter/base-api/type";
import { ExternalFetchResult, FetchOption } from "@/external-adapter/externalAdapterType";
import { QueryKeyFactory } from "@/external-adapter/react-query/queryKeyFactory.ts";
import { transformOption, transformQueryResponse } from "@/external-adapter/react-query/transform.ts";
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
    ...transformOption(option),
  })
  return transformQueryResponse(query)
}
