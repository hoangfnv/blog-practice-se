export const RoutePathFactory = {
  home: () => '~/',
  articleDetail: (id: string) => `~/articles/${id}`,
}

export const RoutePaths: Record<keyof typeof RoutePathFactory, string> = {
  home: '/',
  articleDetail: '/articles/:id',
}
