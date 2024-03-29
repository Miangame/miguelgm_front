/* eslint-disable camelcase */
import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import DevtoService from '../../services/DevtoService'
import { DevtoPublishedArticle } from '../../interfaces/devto'
import PostsList from '../../components/PostsList/PostList'
import { PostListTitle } from '../../components/PostsList/PostList.styled'

type PostsPageProps = {
  articles: DevtoPublishedArticle[]
}

const Posts = ({ articles }: PostsPageProps): JSX.Element => {
  const { t } = useTranslation('navbar')

  return (
    <>
      <PostListTitle>{t('devto')}</PostListTitle>
      <PostsList posts={articles} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
  const articles: DevtoPublishedArticle[] =
    await DevtoService.getDevtoArticles()

  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale, ['navbar', 'common']))
    }
  }
}

export default Posts
