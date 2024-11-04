import { BlogServerErrorCode } from "@/external-interface/base-api/type";
import { fetchArticleList } from "@/external-resource/blog-server/fetchArticleList.ts";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export type ArticleList = {
  id: string,
  title: string,
  description: string,
  thumbnail: string,
}[]

export function useArticleList(): UseQueryResult<ArticleList, BlogServerErrorCode> {
  return useQuery({queryKey: ['articleList'], queryFn: fetchArticleList})
}
