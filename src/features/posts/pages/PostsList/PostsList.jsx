import React, { useEffect, useMemo, useState } from 'react'
import { fetchPosts } from '@/features/posts/services/posts.api'
import { useDebounce } from '@/shared/hooks/useDebounce'
import Spinner from '@/shared/components/Spinner'

export default function PostsList() {
  // Local UI state for search & loading
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])

  const debounced = useDebounce(query, 350)

  useEffect(() => {
    let cancelled = false
    async function run() {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchPosts({ q: debounced })
        if (!cancelled) setItems(data)
      } catch (err) {
        if (!cancelled) setError(err.friendlyMessage || 'Failed to load posts')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    run()
    return () => { cancelled = true }
  }, [debounced])

  const content = useMemo(() => {
    if (loading) return <Spinner />
    if (error) return <p style={{ color: 'tomato' }}>{error}</p>
    if (!items.length) return <p>No posts found.</p>

    return (
      <div style={{ display: 'grid', gap: '1rem' }}>
        {items.map((p) => (
          <article key={p.id} style={{ border: '1px solid var(--border)', background: 'var(--surface)', borderRadius: '.75rem', padding: '1rem' }}>
            <h3 style={{ margin: '0 0 .25rem' }}>{p.title}</h3>
            <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{p.body}</p>
          </article>
        ))}
      </div>
    )
  }, [loading, error, items])

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Posts</h2>
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem' }}>
        <input
          type="search"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, padding: '.55rem .7rem', borderRadius: '.5rem', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--fg)' }}
        />
      </div>
      {content}
    </section>
  )
}
