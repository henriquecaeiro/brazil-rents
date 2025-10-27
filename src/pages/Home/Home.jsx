import React, { useEffect, useState } from 'react'
import Card from '@/shared/components/Card/Card'
import Button from '@/shared/components/Button/Button'
import styles from './Home.module.css'
import Input from '@/shared/components/Input/Input'
import usePredict from '@/features/predict/hooks/usePredict'
import { useLoading } from '@/contexts/LoadingContext'
import load from '@/shared/assets/load.gif'
import search from '@/shared/assets/search.png'
import { toast } from 'react-toastify'

export default function Home() {
  const { submit } = usePredict()
  const { loading } = useLoading()
  const [cardTitle, setCardTitle] = useState(null)
  const [canSubmit, setCanSubmit] = useState(true)

  useEffect(() => {
    const unsubscribe = toast.onChange(({ status, type }) => {
      if (type === 'warning') {
        setCanSubmit((prev) => (status === 'added' ? false : status === 'removed' ? true : prev))
      }
    })

    return () => {
      // em vez de toast.offChange(...):
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    console.log(canSubmit)
  }, [canSubmit])

  const handleSubmit = (e) => {
    e.preventDefault()

    const elements = new FormData(e.currentTarget)
    const values = Object.fromEntries(elements.entries())

    const hasEmpty = Object.values(values).some((v) => String(v).trim() === '')

    if (hasEmpty) {
      toast.warn('preencha todos os campos')
      return
    }

    return submit(e)
  }

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
          <form onSubmit={handleSubmit} className={`row g-3 ${styles.homeFormContainer}`}>
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
          <Card
            title={cardTitle == null ? 'Aguardando sua Pesquisa' : cardTitle}
            center={cardTitle == null ? true : false}
          >
            {loading ? (
              <div className={styles.cardContainer}>
                <img src={load} alt="loading" className={styles.load} />
              </div>
            ) : !loading && cardTitle === null ? (
              <div className={styles.cardContainer}>
                <p className={styles.priceTitle}>
                  Preencha os campos ao lado para estimar o valor do aluguel.
                </p>
                <img src={search} alt="search" className={styles.search} />
              </div>
            ) : (
              <>
                <p>Rua Floro de oliveira</p>
                <h1 className={styles.priceTitle}>R$ 4.500,00</h1>
                <p>Área: 125 m²</p>
                <p>Quartos: 2</p>
                <p>Garagem: 3</p>
                <p>Tipo: Apartamento</p>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
