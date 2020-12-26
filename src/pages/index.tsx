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
      <ProfileImageHome alt="profile" src="/img/profile.jpg" />
    </ImageHomeContainer>
    <DescriptionHomeContainer>
      <HiHome>
        ¡Hola! <span>👋🏽</span>
      </HiHome>
      <NameHome>Soy Miguel Ángel.</NameHome>
      <DescriptionHome>
        <p>
          Actualmente estoy trabajando como <b>Software Engineer</b> en{' '}
          <a href="https://wealize.digital/" target="_blank" rel="noreferrer">
            Wealize
          </a>
          .
        </p>
      </DescriptionHome>
    </DescriptionHomeContainer>
    <QuoteHome>
      <span className="icon-container">
        <i className="fas fa-quote-left"></i>
      </span>
      El trabajo ocupará una gran parte de tu vida, la mejor forma de lidiar con
      ello, es encontrar algo que realmente ames.
      <span className="author">Steve Jobs</span>
    </QuoteHome>
  </HomeContainer>
)

export default Index
