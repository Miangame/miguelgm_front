/* eslint-disable camelcase */
import React from 'react'
import { useRouter } from 'next/router'

import DevtoService from '../../services/DevtoService'
import { useSWR } from '../../hooks/useSWR'
import { DevtoArticle } from '../../interfaces/devto'
import {
  PostTitle,
  PostOrganization,
  PostContainer,
  PostTags,
  PostAuthor,
  PostBody
} from '../../components/Posts/styles'

const PostPage = () => {
  const router = useRouter()
  const {
    query: { id }
  } = router

  const { data: article } = useSWR<DevtoArticle>(`article-${id}`, () =>
    DevtoService.getArticle(id as string)
  )

  return (
    <PostContainer>
      {article?.organization && (
        <PostOrganization>
          <img
            src={article?.organization.profile_image}
            alt={article?.organization.name}
          />
          <p>{article?.organization.name}</p>
        </PostOrganization>
      )}
      <PostTitle>{article?.title}</PostTitle>
      <PostTags>
        {article?.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </PostTags>
      <PostAuthor>
        <img src={article?.user.profile_image} alt={article?.user.name} />
        <p>
          {article?.user.name}{' '}
          <span className="date">· {article?.readable_publish_date}</span>
        </p>
      </PostAuthor>
      <PostBody dangerouslySetInnerHTML={{ __html: article?.body_html }} />
    </PostContainer>
  )
}

export default PostPage
