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
import useRent from '@/features/rent/hooks/useRent'
import Select from '@/shared/components/Select/Select'

export default function Home() {
  const { submit, result } = usePredict()
  const { data } = useRent()
  const { loading } = useLoading()
  const [initializing, setInitializing] = useState(true)
  const [fetching, setFetching] = useState(false)
  const [canSubmit, setCanSubmit] = useState(true)

  useEffect(() => {
    const unsubscribe = toast.onChange(({ status, type }) => {
      if (type === 'warning') {
        setCanSubmit((prev) => (status === 'added' ? false : status === 'removed' ? true : prev))
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (loading) {
      setFetching(true)
    }

    if (!loading && fetching) {
      setInitializing(false)
    }
  }, [loading, fetching])

  useEffect(() => {
    if (loading) {
      setCanSubmit(false)
    } else {
      setCanSubmit(true)
    }
  }, [loading])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    const elements = new FormData(e.currentTarget)
    const values = Object.fromEntries(elements.entries())

    const hasEmpty = Object.values(values).some((v) => String(v).trim() === '')

    if (hasEmpty) {
      toast.warn('preencha todos os campos')
      return
    }

    return submit(e)
  }

  if (initializing) {
    return (
      <div className={styles.loadContainer}>
        <img src={load} alt="loading" className={styles.load} />
      </div>
    )
  }

  return (
    <div className={'container-fluid'}>
      {/* Título */}
      <div className={styles.homeTitleContainer}>
        <h1>Encontre o Valor de Alugel em São Paulo</h1>
        <p>Compare e estime o preço justo para o seu alugel</p>
      </div>

      {/* Grid principal */}
      <div className="row gx-3 justify-content-between">
        <div className="col-12 col-lg-6 row gap-5">
          {/* Form vira a .row para manter o g-3 (gutter) */}
          <form onSubmit={handleSubmit} className={`col-12 row g-3 ${styles.homeFormContainer}`}>
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
              <Select data={data?.addresses} name="endereco" placeholder="Selecione um endereço" />
            </div>

            <div className="col-12 col-lg-6">
              <Select data={data?.districts} name="distrito" placeholder="Selecione um distrito" />
            </div>

            <div className="col-12 col-lg-6">
              <Select data={data?.types} name="tipo" placeholder="Selecione um tipo de imóvel" />
            </div>

            {/* Botão ocupa a linha toda */}
            <div className="col-12">
              <Button
                type="submit"
                className={`w-100 ${canSubmit ? 'buttonForm' : 'buttonDisabled'}`}
              >
                Pesquisar
              </Button>
            </div>
          </form>
        </div>

        {/* Coluna do card de resultado */}
        <div className="col-12 col-lg-6 col-xl-4 mt-4 mt-lg-0">
          <Card
            title={result?.district == undefined ? 'Aguardando sua Pesquisa' : result?.district}
            center={result?.district == undefined ? true : false}
          >
            {loading ? (
              <div className={styles.cardContainer}>
                <img src={load} alt="loading" className={styles.load} />
              </div>
            ) : !loading && result?.district === undefined ? (
              <div className={styles.cardContainer}>
                <p className={styles.priceTitle}>
                  Preencha os campos ao lado para estimar o valor do aluguel.
                </p>
                <img src={search} alt="search" className={styles.search} />
              </div>
            ) : (
              <>
                <p>{result.address}</p>
                <h1 className={styles.priceTitle}>R$ {result.value}</h1>
                <p>Área: {result.area} m²</p>
                <p>Quartos: {result.bedrooms}</p>
                <p>Garagem: {result.garage}</p>
                <p>Tipo: {result.type}</p>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
