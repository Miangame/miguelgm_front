/* eslint-disable camelcase */
import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { useRouter } from 'next/router'

import DevtoService from '../../services/DevtoService'
import { useSWR } from '../../hooks/useSWR'
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

const posts = () => {
  const router = useRouter()

  const { data: articles } = useSWR<DevtoPublishedArticle[]>(
    'articles',
    DevtoService.getDevtoArticles
  )

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
              <img
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
                className="firstImage"
              />
              {article.organization && (
                <img
                  src={article.user?.profile_image}
                  alt={article.user?.name}
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
          </CardReactions>
        </Card>
      ))}
    </>
  )
}

export default posts
