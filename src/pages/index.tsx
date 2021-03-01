import { GetStaticProps } from 'next'
import React from 'react'

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
} from '../components/Pages/Home/styles'
import Skills from '../components/Skills'

const Index = () => (
  <HomeContainer>
    <ImageHomeContainer>
      <ProfileImageHome alt="profile" src="/img/profile.webp" />
    </ImageHomeContainer>
    <DescriptionHomeContainer>
      <HiHome>
        ¡Hola! <span>👋🏽</span>
      </HiHome>
      <NameHome>Soy Miguel Ángel.</NameHome>
      <SubtitleHome>Software Engineer / Web Developer</SubtitleHome>
      <DescriptionHome>
        <p>
          Actualmente estoy trabajando como <b>Software Engineer</b> en{' '}
          <a href="https://wealize.digital/" target="_blank" rel="noreferrer">
            Wealize
          </a>
          .
        </p>
        <p>
          Me considero una persona trabajadora e inconformista, nunca considero
          que algo está lo suficientemente bien. Soy bastante metódico y
          constante para poder alcanzar mis metas, además me gustan los{' '}
          <b>retos constantes</b>, no quiero aburrirme 😄.
        </p>
        <p>
          Por otro lado, me encanta el deporte. He probado muchos, pero el que
          me atrapó fue el <b>TAEKWONDO</b> 🥋, tanto que lo he practicado
          durante casi 20 años consiguiendo el cinturón negro <b>1er DAN</b> en
          el año 2012.
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
      Choose a job you love, and you will never have to work a day in your life.
      <span>Confucius</span>
    </QuoteHome>
  </HomeContainer>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Index
