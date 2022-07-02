import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Experience from '../components/ExperienceSection/ExperienceSection'
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
  TitleHome,
  QuoteHomeContainer
} from '../components/pages/home/styles'
import Skills from '../components/Skills/Skills'
import SocialIcons from '../components/SocialIcons/SocialIcons'

const Index = (): JSX.Element => {
  const { t } = useTranslation(['common', 'home'])

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
          {t('home:hi')} <span>👋🏽</span>
        </HiHome>
        <NameHome>{t('home:who_am_i')}</NameHome>
        <SubtitleHome>{t('profession')}</SubtitleHome>
        <SocialIcons />
        <DescriptionHome>
          <p>
            <span
              dangerouslySetInnerHTML={{
                __html: t('home:description.presentation', {
                  interpolation: { escapeValue: false }
                })
              }}
            ></span>{' '}
            <a href="https://genial.ly/" target="_blank" rel="noreferrer">
              Genially
            </a>
            .
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: t('home:description.description', {
                interpolation: { escapeValue: false }
              })
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t('home:description.other', {
                interpolation: { escapeValue: false }
              })
            }}
          ></p>
        </DescriptionHome>
      </DescriptionHomeContainer>
      <AboutMe>
        <div>
          <TitleHome>{t('home:experience')}</TitleHome>
          <a
            download="cv-miguel-gavilan-merino.pdf"
            target="_blank"
            href="../cv-miguel-gavilan-merino.pdf"
          >
            {t('home:download_cv')}
          </a>
          <Experience />
        </div>
        <div>
          <TitleHome>{t('home:skills')}</TitleHome>
          <Skills />
        </div>
      </AboutMe>
      <QuoteHomeContainer>
        <QuoteHome>
          {t('home:quote')}
          <span>Confucius</span>
        </QuoteHome>
      </QuoteHomeContainer>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
