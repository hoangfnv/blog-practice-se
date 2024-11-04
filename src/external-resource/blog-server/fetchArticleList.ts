import { BlogServerApiResponse } from "@/external-interface/base-api/type";
import { ArticleList } from "@/external-interface/base-api/useArticleList.ts";
import { BlogServerFetch } from "@/external-resource/blog-server/index.ts";

type ArticleListResponse = BlogServerApiResponse<ArticleList>

export async function fetchArticleList(): Promise<ArticleList> {
  const response = await BlogServerFetch<ArticleListResponse>('/articles')
  if (response.status === 'success') {
    return response.data
  }
  if (response.status === 'error') {
    throw response.errorCode;
  }
  throw new Error('The response has wrong type')
}
