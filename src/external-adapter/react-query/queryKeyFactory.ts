type QueryKey = 'articleOverviewList' | 'articleDetail'

export const QueryKeyFactory: Record<QueryKey, (...args: (string | undefined)[]) => string[]> = {
  articleOverviewList: () => ['articleOverviewList'],
  articleDetail: (articleId: string | undefined) => ['articleDetail', articleId || ''],
}
