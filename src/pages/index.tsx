import { GetStaticProps } from 'next'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Experience from '../components/Experience'
import {
  AboutMe,
  DescriptionHome,
  DescriptionHomeContainer,
  HiHome,
  HomeContainer,
  ImageHomeContainer,
  NameHome,
  ProfileImageHome,
  QuoteHome,
  SubtitleHome,
  TitleHome
} from '../components/pages/home/styles'
import Skills from '../components/Skills'

const Index = () => {
  const { t } = useTranslation('home')

  return (
    <HomeContainer>
      <ImageHomeContainer>
        <ProfileImageHome
          alt="profile"
          src="/img/profile.webp"
          loading="lazy"
        />
      </ImageHomeContainer>
      <DescriptionHomeContainer>
        <HiHome>
          {t('hi')} <span>👋🏽</span>
        </HiHome>
        <NameHome>Soy Miguel Ángel.</NameHome>
        <SubtitleHome>Software Engineer / Web Developer</SubtitleHome>
        <DescriptionHome>
          <p>
            Actualmente estoy trabajando como <b>Frontend Engineer</b> en{' '}
            <a href="https://genial.ly/" target="_blank" rel="noreferrer">
              Genially
            </a>
            .
          </p>
          <p>
            Me considero una persona trabajadora e inconformista, nunca
            considero que algo está lo suficientemente bien. Soy bastante
            metódico y constante para poder alcanzar mis metas. Además me
            apasionan <b>retos constantes</b>, no me gusta aburrirme 😄.
          </p>
          <p>
            Por otro lado, me encanta el deporte. He practicado <b>TAEKWONDO</b>{' '}
            🥋 durante casi 20 años, llegando a obtener el cinturón negro{' '}
            <b>1er DAN</b>.
          </p>
        </DescriptionHome>
      </DescriptionHomeContainer>
      <AboutMe>
        <div>
          <TitleHome>Mi experiencia</TitleHome>
          <a
            download="cv-miguel-gavilan-merino.pdf"
            target="_blank"
            href="../cv-miguel-gavilan-merino.pdf"
          >
            Descarga mi CV actualizado
          </a>
          <Experience />
        </div>
        <div>
          <TitleHome>Mis habilidades</TitleHome>
          <Skills />
        </div>
      </AboutMe>
      <QuoteHome>
        Choose a job you love, and you will never have to work a day in your
        life.
        <span>Confucius</span>
      </QuoteHome>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log(locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home']))
    }
  }
}

export default Index
