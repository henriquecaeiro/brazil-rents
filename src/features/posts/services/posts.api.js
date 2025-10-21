import http from '@/shared/services/http'

export async function fetchPosts({ q } = {}) {
  // Demo uses JSONPlaceholder: /posts
  // In a real app, your API might support search via query params.
  const { data } = await http.get('/posts')
  const items = Array.isArray(data) ? data : []

  if (!q) return items
  const lower = q.toLowerCase()
  return items.filter(p =>
    String(p.title).toLowerCase().includes(lower) ||
    String(p.body).toLowerCase().includes(lower)
  )
}
