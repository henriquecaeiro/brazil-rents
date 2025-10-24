import React from 'react'
import Card from '@/shared/components/Card/Card'
import Button from '@/shared/components/Button/Button'
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone, FaLocationDot } from 'react-icons/fa6'
import styles from '@/pages/Contact/Contact.module.css'
import { MdEmail } from 'react-icons/md'
import Input from '@/shared/components/Input/Input'

export default function Contact() {
  return (
    <div className={`row ${styles.contactContainer}`}>
      <div className={`col-12 ${styles.contactTilte}`}>
        <h1>Fale Comigo</h1>
        <p>
          Se você ficou interesado, e quiser entrar em contato comigo. Envie mensagem em qualquer um
          dos canais abaixo
        </p>
      </div>

      <div className={`col-12 col-xl-4 row gap-4 ${styles.contactChannels}`}>
        <div className="col-12">
          <Card title="Email">
            <div className={`col ${styles.contactLink}`}>
              <div className={styles.contactIconContainer}>
                <MdEmail size={24} />
              </div>
              <p>henriquecaeiro.dev@gmail.com</p>
            </div>
          </Card>
        </div>
        <div className="col-12">
          <Card title="Telefone">
            <div className={`col ${styles.contactLink}`}>
              <div className={styles.contactIconContainer}>
                <FaPhone size={24} />
              </div>
              <p>(61) 99844-9383</p>
            </div>
          </Card>
        </div>
        <div className="col-12">
          <Card title="Localização">
            <div className={`col ${styles.contactLink}`}>
              <div className={styles.contactIconContainer}>
                <FaLocationDot size={24} />
              </div>
              <p>Brasília - DF</p>
            </div>
          </Card>
        </div>
        <div className="col-12">
          <h2>Redes Sociais</h2>
          <div className="row">
            <div className="col">
              <a
                href="https://github.com/henriquecaeiro"
                target="_blank"
                className={styles.socialsLink}
                rel="noreferrer"
              >
                <Button className="buttonPrimary">
                  <FaGithub size={24} className={styles.socialsIcon} />
                </Button>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.linkedin.com/in/henrique-caeiro-a28135269/"
                target="_blank"
                className={styles.socialsLink}
                rel="noreferrer"
              >
                <Button className="buttonPrimary">
                  <FaLinkedin size={24} className={styles.socialsIcon} />
                </Button>
              </a>
            </div>
            <div className="col">
              <a
                href="https://wa.me/5561998449383"
                target="_blank"
                className={styles.socialsLink}
                rel="noreferrer"
              >
                <Button className="buttonPrimary">
                  <FaWhatsapp size={24} className={styles.socialsIcon} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-xl-5 row mt-4 mt-xl-0">
        <Card title="Envie uma mensagem" center={true}>
          <div className={`row gap-1 p-2`}>
            <Input id="nome-input" placeholder="Nome" className="inputLight" />
            <Input id="email-input" placeholder="Email" className="inputLight" />
            <Input id="telefone-input" placeholder="Telefone" className="inputLight" col={12} />
            <Input id="assunto-input" placeholder="Assunto" className="inputLight" col={12} />
            <Input
              id="mensagem-input"
              placeholder="Mensagem"
              textarea={true}
              col={12}
              className="textArea inputLight"
            />
            <Button className="buttonForm">Pesquisar</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
