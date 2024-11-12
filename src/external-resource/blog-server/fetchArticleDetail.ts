import { BlogServerApiResponse, BlogServerErrorCode } from "@/external-adapter/base-api/type";
import { ArticleDetail } from "@/external-adapter/base-api/useArticleDetail.ts";
import { BlogServerFetch } from "@/external-resource/blog-server/index.ts";

export async function fetchArticleDetail(id: string | undefined): Promise<ArticleDetail> {
  if (!id) {
    const error: BlogServerErrorCode = 'LackOfParam';
    throw error
  }
  const response = await BlogServerFetch<BlogServerApiResponse<ArticleDetail>>(`/articles/${id}`)
  if (response.status === 'success') {
    return response.data
  }
  if (response.status === 'error') {
    throw response.errorCode;
  }
  const error: BlogServerErrorCode = 'WrongResponseType';
  throw error
}
