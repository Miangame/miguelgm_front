/* eslint-disable camelcase */
import React from 'react'
import { GetStaticProps } from 'next'

import DevtoService from '../../services/DevtoService'
import { DevtoPublishedArticle } from '../../interfaces/devto'
import PostsList from '../../components/Posts/PostsList'
import { PostListTitle } from '../../components/Posts/styles'

type PostsPageProps = {
  articles: DevtoPublishedArticle[]
}

const Posts = ({ articles }: PostsPageProps) => (
  <>
    <PostListTitle>Dev.to Posts</PostListTitle>
    <PostsList posts={articles} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const articles: DevtoPublishedArticle[] = await DevtoService.getDevtoArticles()

  return {
    props: {
      articles
    }
  }
}

export default Posts
