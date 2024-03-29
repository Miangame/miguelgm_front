import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { presentations } from '../data/presentations'
import PresentationsList from '../components/PresentationsList/PresentationsList'
import { PresentationsListTitle } from '../components/PresentationsList/PresentationsList.styled'

const Presentations = (): JSX.Element => {
  const { t } = useTranslation('navbar')
  return (
    <>
      <PresentationsListTitle>{t('presentations')}</PresentationsListTitle>
      <PresentationsList presentations={presentations} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'presentations']))
    }
  }
}

export default Presentations
