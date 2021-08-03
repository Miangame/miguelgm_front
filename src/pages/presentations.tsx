import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { presentations } from '../data/presentations'
import PresentationsList from '../components/PresentationsList'
import { PresentationsListTitle } from '../components/PresentationsList/styles'

const Presentations = () => (
  <>
    <PresentationsListTitle>Ponencias</PresentationsListTitle>
    <PresentationsList presentations={presentations} />
  </>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar']))
    }
  }
}

export default Presentations
