import { requestToShowFullArticle } from "@/businessLogic/requestToShowFullArticle.ts";
import { useAPartOfArticleDetail } from "@/external-adapter/base-api/useAPartOfArticleDetail.ts";
import { ArticleDetail, useArticleDetail } from "@/external-adapter/base-api/useArticleDetail.ts";

export function useArticleToDisplay(articleId: ArticleDetail['id'] | undefined) {
  const {response: canShowFull, errorType: conditionToShowFull} = requestToShowFullArticle()
  const articleDetailQuery = useArticleDetail(articleId, {enable: canShowFull})
  const aPartOfArticleDetailQuery = useAPartOfArticleDetail(articleId, {enable: !canShowFull})

  if (canShowFull) {
    return {
      articleQuery: articleDetailQuery
    }
  } else {
    return {
      articleQuery: aPartOfArticleDetailQuery,
      conditionToShowFull: conditionToShowFull
    }
  }
}
