import React from 'react'

import {
  DescriptionAboutMe,
  TitleAboutMe,
  SubtitleAboutMe,
  AboutMeContainer
} from '../components/Pages/AboutMe/styles'
import {
  ImageHomeContainer,
  ProfileImageHome
} from '../components/Pages/Home/styles'

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <ImageHomeContainer>
        <ProfileImageHome alt="profile" src="/img/profile.webp" />
      </ImageHomeContainer>
      <TitleAboutMe>Soy Miguel Ángel Gavilán</TitleAboutMe>
      <SubtitleAboutMe>Software Engineer / Web Developer</SubtitleAboutMe>
      <DescriptionAboutMe>
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
      </DescriptionAboutMe>
    </AboutMeContainer>
  )
}

export default AboutMe
