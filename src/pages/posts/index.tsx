import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { useRouter } from 'next/router'

import DevtoService from '../../services/DevtoService'
import { useSWR } from '../../hooks/useSWR'
import { DevtoArticle } from '../../interfaces/devto'
import {
  Card,
  CardTitle,
  CardTag,
  CardReactions,
  CardAuthor,
  CardTags
} from '../../components/Posts/styles'

const posts = () => {
  const router = useRouter()

  const { data: articles } = useSWR<DevtoArticle[]>(
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
            <span>{article.user.name}</span>
            {article.organization && (
              <>
                {' '}
                for
                <span> {article.organization.name}</span>
              </>
            )}
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
