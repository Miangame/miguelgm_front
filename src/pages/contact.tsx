/* eslint-disable camelcase */
import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { SOCIAL_MEDIA } from '../data/socialMedia'
import {
  Avatar,
  ContainerContact,
  Description,
  Name,
  Social
} from '../components/pages/contact/styles'

const Contact = () => {
  const { t } = useTranslation('common')
  return (
    <ContainerContact>
      <Avatar src="img/avatar2.jpeg" loading="lazy" />
      <Name>Miguel Ángel Gavilán Merino</Name>
      <Description>{t('profession')}</Description>
      <Social>
        {SOCIAL_MEDIA.map(({ link, icon }, index) => {
          const Icon = icon
          return (
            <a key={index} href={link} target="_blank" rel="noreferrer">
              <Icon size={30} />
            </a>
          )
        })}
      </Social>
    </ContainerContact>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'common']))
    }
  }
}

export default Contact
