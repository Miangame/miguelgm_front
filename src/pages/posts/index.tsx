/* eslint-disable camelcase */
import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import DevtoService from '../../services/DevtoService'
import { DevtoPublishedArticle } from '../../interfaces/devto'
import {
  Card,
  CardTitle,
  CardTag,
  CardReactions,
  CardAuthor,
  CardTags,
  CardAuthorImage,
  CardAuthorName
} from '../../components/Posts/styles'

type PostsPageProps = {
  articles: DevtoPublishedArticle[]
}

const Posts = ({ articles }: PostsPageProps) => {
  const router = useRouter()

  return (
    <>
      {articles?.map((article) => (
        <Card
          key={article.id}
          onClick={() => {
            router.replace(`${router.pathname}/${article.id}`)
          }}
        >
          <CardAuthor>
            <CardAuthorImage>
              <Image
                src={
                  article.organization
                    ? article.organization.profile_image
                    : article.user?.profile_image
                }
                alt={
                  article.organization
                    ? article.organization.name
                    : article.user?.username
                }
                width={30}
                height={30}
                className="firstImage"
              />
              {article.organization && (
                <Image
                  src={article.user?.profile_image}
                  alt={article.user?.name}
                  width={20}
                  height={20}
                  className="secondaryImage"
                />
              )}
            </CardAuthorImage>
            <CardAuthorName>
              <p>
                <span>{article.user.name}</span>
                {article.organization && (
                  <>
                    {' '}
                    for
                    <span> {article.organization.name}</span>
                  </>
                )}
              </p>
              <p className="date">{article.readable_publish_date}</p>
            </CardAuthorName>
          </CardAuthor>

          <CardTitle>{article.title}</CardTitle>

          <CardTags>
            {article.tag_list.map((tag, index) => (
              <CardTag key={index}>#{tag}</CardTag>
            ))}
          </CardTags>

          <CardReactions>
            {article.comments_count > 0 && (
              <>
                <FaRegComment />
                <span>{article.comments_count} comentarios</span>
              </>
            )}
            {article.public_reactions_count > 0 && (
              <>
                <BsHeart />
                <span>{article.public_reactions_count} reacciones</span>
              </>
            )}
            <a href={article.url} target="_blank" rel="noreferrer">Ver post original</a>
          </CardReactions>
        </Card>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articles: DevtoPublishedArticle[] = await DevtoService.getDevtoArticles()

  return {
    props: {
      articles
    }
  }
}

export default Posts
