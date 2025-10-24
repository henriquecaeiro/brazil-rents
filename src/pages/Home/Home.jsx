import React from 'react'
import Card from '@/shared/components/Card/Card'
import Button from '@/shared/components/Button/Button'
import styles from './Home.module.css'
import Input from '@/shared/components/Input/Input'
import usePredict from '@/features/predict/hooks/usePredict'

export default function Home() {
  const { submit } = usePredict()

  return (
    <div className="container-fluid">
      {/* Título */}
      <div className={styles.homeTitleContainer}>
        <h1>Encontre o Valor de Alugel em São Paulo</h1>
        <p>Compare e estime o preço justo para o seu alugel</p>
      </div>

      {/* Botões */}
      <div className={styles.homeButtonsContainer}>
        <div className="row g-3 justify-content-between justify-content-lg-center w-100">
          <div className="col-12 col-lg-6 col-xl-3">
            <Button className="buttonPrimary buttonLg w-100">Pesquisa Individual</Button>
          </div>
          <div className="col-12 col-lg-6 col-xl-3">
            <Button className="buttonSecondary buttonLg w-100">Pesquisa Individual</Button>
          </div>
        </div>
      </div>

      {/* Grid principal */}
      <div className="row gx-3 justify-content-between">
        <div className="col-12 col-lg-6">
          {/* Form vira a .row para manter o g-3 (gutter) */}
          <form onSubmit={submit} className={`row g-3 ${styles.homeFormContainer}`}>
            <div className="col-12 col-lg-6">
              <Input
                id="area-input"
                name="area"
                type="number"
                placeholder="Área (m²)"
                className="w-100"
              />
            </div>

            <div className="col-12 col-lg-6">
              <Input
                id="quartos-input"
                name="quartos"
                type="number"
                placeholder="Quartos"
                className="w-100"
              />
            </div>

            <div className="col-12 col-lg-6">
              <Input
                id="garagem-input"
                name="garagem"
                type="number"
                placeholder="Garagem (0 se não tiver)"
                className="w-100"
              />
            </div>

            <div className="col-12 col-lg-6">
              <Input id="endereco-input" name="endereco" placeholder="Endereço" className="w-100" />
            </div>

            <div className="col-12 col-lg-6">
              <Input id="distrito-input" name="distrito" placeholder="Distrito" className="w-100" />
            </div>

            <div className="col-12 col-lg-6">
              <Input id="tipo-input" name="tipo" placeholder="Tipo do imóvel" className="w-100" />
            </div>

            {/* Botão ocupa a linha toda */}
            <div className="col-12">
              <Button type="submit" className="buttonForm w-100">
                Pesquisar
              </Button>
            </div>
          </form>
        </div>

        {/* Coluna do card de resultado */}
        <div className="col-12 col-lg-6 col-xl-4 mt-4 mt-lg-0">
          <Card title="Jardim Adriana">
            <p>Rua Floro de oliveira</p>
            <h1 className={styles.priceTitle}>R$ 4.500,00</h1>
            <p>Área: 125 m²</p>
            <p>Quartos: 2</p>
            <p>Garagem: 3</p>
            <p>Tipo: Apartamento</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
