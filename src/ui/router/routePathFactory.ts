type RoutePath = 'home' | 'articleDetail'

export const RoutePathFactory: Record<RoutePath, (...args: (string | undefined)[]) => string> = {
  home: () => '~/',
  articleDetail: (id) => `~/articles/${id}`,
}

export const RoutePaths: Record<RoutePath, string> = {
  home: '/',
  articleDetail: '/articles/:id',
}
