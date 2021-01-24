import { GetStaticProps } from 'next'
import React from 'react'

import {
  DescriptionHome,
  DescriptionHomeContainer,
  HiHome,
  HomeContainer,
  ImageHomeContainer,
  NameHome,
  ProfileImageHome,
  QuoteHome,
  SubtitleHome
} from '../components/Pages/Home/styles'

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
    <QuoteHome>
      {/* <i className="fas fa-quote-left quote-icon"></i> */}
      El trabajo ocupará una gran parte de tu vida, la mejor forma de lidiar con
      ello, es encontrar algo que realmente ames.
      <span>Steve Jobs</span>
    </QuoteHome>
  </HomeContainer>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Index
