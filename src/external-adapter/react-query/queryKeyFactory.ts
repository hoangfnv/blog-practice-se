type QueryKey = 'articleOverviewList' | 'articleDetail' | 'aPartOfArticleDetail'

export const QueryKeyFactory: Record<QueryKey, (...args: (string | undefined)[]) => string[]> = {
  articleOverviewList: () => ['articleOverviewList'],
  articleDetail: (articleId: string | undefined) => ['articleDetail', articleId || ''],
  aPartOfArticleDetail: (articleId: string | undefined) => ['aPartOfArticleDetail', articleId || ''],
}
