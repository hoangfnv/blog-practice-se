type UserPermission = 'readFullArticle'

export function checkUserPermission(userPermission: UserPermission): boolean {
  return !userPermission
}
