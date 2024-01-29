export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}
export function dateSortAsc(a, b) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}
export function sortPostsBySlug(allBlogs) {
  return allBlogs.sort((a, b) => dateSortDesc(a.date, b.date))
}
export function sortPostsByCategoryOrder(allBlogs) {
  return allBlogs.sort((a, b) => dateSortAsc(a.date, b.date))
}

export function sortedBlogPost(allBlogs) {
  return sortPostsBySlug(allBlogs)
}
