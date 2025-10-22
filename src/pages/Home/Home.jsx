import React from 'react'
import Card from '@/shared/components/Card/Card'
import Button from '@/shared/components/Button/Button'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Input from '@/shared/components/Input/Input'

export default function Home() {
  return (
    <div className="container">
      <div className={styles.homeTitleContainer}>
        <h1>Encontre o Valor de Alugel em São Paulo</h1>
        <p>Compare e estime o preço justo para o seu alugel</p>
      </div>

      <div className={`${styles.homeButtonsContainer} container`}>
        <Button className="buttonPrimary buttonLg">Pesquisa Individual</Button>

        <Button className="buttonSecondary buttonLg">Pesquisa Individual</Button>
      </div>

      <div className={`${styles.homeFormContainer} container`}>
        <Input placehoder={'Nome'} />
        <Button className="buttonForm">Pesquisar</Button>
      </div>

      {/*       <Card title="Welcome">
        <p>
          This is a minimal React + Vite starter using a <strong>feature-first</strong> structure.
          Explore the <code>shared/</code> folder for reusable pieces and the <code>features/</code>{' '}
          folder for domain-specific modules.
        </p>
        <p>
          Try the demo <Link to="/posts">Posts</Link> page to see API calls in action.
        </p>
        <Button as={Link} to="/posts">
          Explore Posts →
        </Button>
      </Card> */}
    </div>
  )
}
