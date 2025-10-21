import React from 'react'
import Card from '@/shared/components/Card/Card'
import Button from '@/shared/components/Button/Button'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.grid}>
      <Card title="Welcome">
        <p>
          This is a minimal React + Vite starter using a <strong>feature-first</strong> structure.
          Explore the <code>shared/</code> folder for reusable pieces and the <code>features/</code> folder for domain-specific modules.
        </p>
        <p>
          Try the demo <Link to="/posts">Posts</Link> page to see API calls in action.
        </p>
        <Button as={Link} to="/posts">Explore Posts →</Button>
      </Card>
      <Card title="Where things live">
        <ul>
          <li><code>app/</code> — shell and routes</li>
          <li><code>layouts/</code> — layout wrappers</li>
          <li><code>pages/</code> — global pages (Home, About, 404)</li>
          <li><code>features/</code> — domain folders (example: posts)</li>
          <li><code>shared/</code> — reusable components, hooks, utils, services, styles</li>
        </ul>
      </Card>
    </div>
  )
}
