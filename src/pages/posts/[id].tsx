/* eslint-disable camelcase */
import React from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import DevtoService from '../../services/DevtoService'
import { DevtoArticle, DevtoPublishedArticle } from '../../interfaces/devto'
import {
  PostTitle,
  PostOrganization,
  PostContainer,
  PostTags,
  PostAuthor,
  PostBody
} from '../../components/Posts/styles'

type PostProps = {
  article: DevtoArticle
}

const PostPage = ({ article }: PostProps) => (
  <PostContainer>
    {article?.organization && (
      <PostOrganization>
        <Image
          src={article?.organization.profile_image}
          alt={article?.organization.name}
          width={32}
          height={32}
        />
        <p>{article?.organization.name}</p>
      </PostOrganization>
    )}
    <a href={article?.url} target="_blank" rel="noreferrer">
      Ver post original
    </a>
    <PostTitle>{article?.title}</PostTitle>
    <PostTags>
      {article?.tags.map((tag, index) => (
        <span key={index}>#{tag}</span>
      ))}
    </PostTags>
    <PostAuthor>
      <Image
        src={article?.user.profile_image}
        alt={article?.user.name}
        width={32}
        height={32}
      />
      <p>
        {article?.user.name}{' '}
        <span className="date">· {article?.readable_publish_date}</span>
      </p>
    </PostAuthor>
    <PostBody dangerouslySetInnerHTML={{ __html: article?.body_html }} />
  </PostContainer>
)

export const getStaticPaths = async () => {
  const articles: DevtoPublishedArticle[] = await DevtoService.getDevtoArticles()

  const paths = articles.map((article) => ({
    params: { id: article.id.toString() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article: DevtoArticle = await DevtoService.getArticle(
    params.id as string
  )

  return {
    props: {
      article
    }
  }
}

export default PostPage
