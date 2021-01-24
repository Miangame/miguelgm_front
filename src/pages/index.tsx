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
  QuoteHome
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
      <DescriptionHome>
        Actualmente estoy trabajando como <b>Software Engineer</b> en{' '}
        <a href="https://wealize.digital/" target="_blank" rel="noreferrer">
          Wealize
        </a>
        .
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
