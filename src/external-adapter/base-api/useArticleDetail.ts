import { BlogServerErrorCode } from "@/external-adapter/base-api/type";
import { ArticleOverview } from "@/external-adapter/base-api/useArticleOverviewList.ts";
import { ExternalFetchResult, FetchOption } from "@/external-adapter/externalAdapterType";
import { QueryKeyFactory } from "@/external-adapter/react-query/queryKeyFactory.ts";
import { transformQueryResponse } from "@/external-adapter/react-query/transform.ts";
import { fetchArticleDetail } from "@/external-resource/blog-server/fetchArticleDetail.ts";
import { useQuery } from "@tanstack/react-query";

export type ArticleDetail = ArticleOverview & {
  content: string
}

export function useArticleDetail(articleId: string | undefined, option?: FetchOption): ExternalFetchResult<ArticleDetail, BlogServerErrorCode> {
  const query = useQuery<ArticleDetail, BlogServerErrorCode>({
    queryKey: QueryKeyFactory.articleDetail(articleId),
    queryFn: () => fetchArticleDetail(articleId),
    enabled: !!articleId,
    ...(option || {}),
  })
  return transformQueryResponse(query)
}
