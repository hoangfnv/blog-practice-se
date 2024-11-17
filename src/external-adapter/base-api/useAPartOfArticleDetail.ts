import { BlogServerErrorCode } from "@/external-adapter/base-api/type";
import { ArticleOverview } from "@/external-adapter/base-api/useArticleOverviewList.ts";
import { ExternalFetchResult, FetchOption } from "@/external-adapter/externalAdapterType";
import { QueryKeyFactory } from "@/external-adapter/react-query/queryKeyFactory.ts";
import { transformOption, transformQueryResponse } from "@/external-adapter/react-query/transform.ts";
import { fetchAPartOfArticleDetail } from "@/external-resource/blog-server/fetchAPartOfArticleDetail.ts";
import { useQuery } from "@tanstack/react-query";

export type ArticleDetail = ArticleOverview & {
  content: string
}

export function useAPartOfArticleDetail(articleId: string | undefined, option?: FetchOption): ExternalFetchResult<ArticleDetail, BlogServerErrorCode> {
  const query = useQuery<ArticleDetail, BlogServerErrorCode>({
    queryKey: QueryKeyFactory.aPartOfArticleDetail(articleId),
    queryFn: () => fetchAPartOfArticleDetail(articleId),
    enabled: !!articleId,
    ...transformOption(option),
  })
  return transformQueryResponse(query)
}
