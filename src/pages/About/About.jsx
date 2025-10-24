import React from 'react'
import Card from '@/shared/components/Card/Card'
import styles from '@/pages/About/About.module.css'

export default function About() {
  return (
    <div className={`container-fluid row ${styles.aboutContainer} gy-3 gy-xl-0`}>
      <div className="col-12 col-xl-5">
        <Card title="📖 Sobre este projeto" fixed={true}>
          <p>
            Este projeto é um estimador de preços de aluguel para imóveis no Brasil, com foco
            específico na cidade de São Paulo. Ele utiliza um modelo de machine learning (também
            feito por mim) para prever os preços de aluguel com base nas características e
            localização do imóvel. O modelo é servido através de uma aplicação FastAPI.
          </p>
        </Card>
      </div>
      <div className="col-12 col-xl-4">
        <Card title="🎯 Objetivo" fixed={true}>
          <p>
            Este é um projeto pessoal para demonstrar habilidades em machine learning, desde a
            exploração de dados e engenharia de features até o treinamento e implantação do modelo.
          </p>
        </Card>
      </div>
      <div className="col">
        <Card title="🐙 Repositórios" fixed={true}>
          <div className={`row ${styles.repositoriosBody}`}>
            <a
              href="https://github.com/henriquecaeiro/brazil-rent-price-estimator"
              target="_blank"
              rel="noopener noreferrer"
              className="col"
            >
              📁 Estimador de preços
            </a>
            <a
              href="https://github.com/henriquecaeiro/brazil-rents"
              target="_blank"
              rel="noopener noreferrer"
              className="col"
            >
              📁 Estimador de preços - Website
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}
