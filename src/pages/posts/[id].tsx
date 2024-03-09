/* eslint-disable camelcase */
import React from 'react'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import DevtoService from '../../services/DevtoService'
import { DevtoArticle, DevtoPublishedArticle } from '../../interfaces/devto'
import {
  PostAuthor,
  PostBody,
  PostContainer,
  PostOrganization,
  PostTags,
  PostTitle
} from '../../components/PostsList/PostList.styled'
import { LOCALES_AVAILABLES } from '../../constants/locales'

type PostProps = {
  article: DevtoArticle
}

const PostPage = ({ article }: PostProps): JSX.Element => {
  const { t } = useTranslation('common')
  return (
    <PostContainer>
      {article?.organization && (
        <PostOrganization>
          <Image
            src={article?.organization.profile_image}
            alt={article?.organization.name}
            width={32}
            height={32}
            loading="lazy"
          />
          <p>{article?.organization.name}</p>
        </PostOrganization>
      )}
      <a href={article?.url} target="_blank" rel="noreferrer">
        {t('see_original_post')}
      </a>
      <PostTitle>{article?.title}</PostTitle>
      <PostTags>
        {article?.tags?.map((tag, index) => <span key={index}>#{tag}</span>)}
      </PostTags>
      <PostAuthor>
        {article?.user && (
          <Image
            src={article?.user?.profile_image}
            alt={article?.user?.name}
            width={32}
            height={32}
            loading="lazy"
          />
        )}
        <p>
          {article?.user?.name}{' '}
          <span className="date">· {article?.readable_publish_date}</span>
        </p>
      </PostAuthor>
      {article?.body_html && (
        <PostBody dangerouslySetInnerHTML={{ __html: article?.body_html }} />
      )}
    </PostContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: DevtoPublishedArticle[] =
    await DevtoService.getDevtoArticles()

  const paths = LOCALES_AVAILABLES.reduce(
    (acc, next) => [
      ...acc,
      ...articles.map(({ id }) => ({
        params: { id: id?.toString() },
        locale: next
      }))
    ],
    []
  )

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = 'es'
}) => {
  const article: DevtoPublishedArticle = await DevtoService.getArticle(
    params?.id as string
  )

  return {
    props: {
      article,
      ...(await serverSideTranslations(locale, ['navbar', 'common']))
    }
  }
}

export default PostPage
