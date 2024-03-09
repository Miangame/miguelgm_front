import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { HomeContainer } from '../components/pages/home/home.styled'
import ImageHome from '../components/pages/home/components/ImageHome/ImageHome'
import DescriptionHome from '../components/pages/home/components/DescriptionHome/DescriptionHome'
import AboutMe from '../components/pages/home/components/AboutMe/AboutMe'
import QuoteHome from '../components/pages/home/components/QuoteHome/QuoteHome'

const Index = (): JSX.Element => (
  <HomeContainer>
    <ImageHome />
    <DescriptionHome />
    <AboutMe />
    <QuoteHome />
  </HomeContainer>
)

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'experience',
        'skills',
        'navbar'
      ]))
    }
  }
}

export default Index
