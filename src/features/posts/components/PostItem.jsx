import React from 'react'
import Card from '@/shared/components/Card/Card'

export default function PostItem({ post }) {
  return (
    <Card title={post.title}>
      <p style={{ whiteSpace: 'pre-line' }}>{post.body}</p>
    </Card>
  )
}
