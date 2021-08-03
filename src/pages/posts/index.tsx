/* eslint-disable camelcase */
import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DevtoService from '../../services/DevtoService'
import { DevtoPublishedArticle } from '../../interfaces/devto'
import PostsList from '../../components/PostsList'
import { PostListTitle } from '../../components/PostsList/styles'

type PostsPageProps = {
  articles: DevtoPublishedArticle[]
}

const Posts = ({ articles }: PostsPageProps) => (
  <>
    <PostListTitle>Dev.to Posts</PostListTitle>
    <PostsList posts={articles} />
  </>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles: DevtoPublishedArticle[] =
    await DevtoService.getDevtoArticles()

  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale, ['navbar']))
    }
  }
}

export default Posts
