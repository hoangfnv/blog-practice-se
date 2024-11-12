import { BlogServerApiResponse } from "@/external-adapter/base-api/type";
import { ArticleOverview } from "@/external-adapter/base-api/useArticleOverviewList.ts";
import { BlogServerFetch } from "@/external-resource/blog-server/index.ts";

export async function fetchArticleOverviewList(): Promise<ArticleOverview[]> {
  const response = await BlogServerFetch<BlogServerApiResponse<ArticleOverview[]>>('/articles')
  if (response.status === 'success') {
    return response.data
  }
  if (response.status === 'error') {
    throw response.errorCode;
  }
  throw new Error('The response has wrong type')
}
