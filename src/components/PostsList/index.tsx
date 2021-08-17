/* eslint-disable camelcase */
import React from 'react'
import { useRouter } from 'next/router'
import { BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { TFunction } from 'i18next'
import { useTranslation } from 'next-i18next'

import { DevtoPublishedArticle } from '../../interfaces/devto'
import Card from '../Card'

import {
  ListPostTitle,
  ListPostTags,
  ListPostTag,
  ListPostReactions,
  PostAuthorImage,
  PostAuthorName,
  PostInformation,
  PostsListContainer,
  PostsBodyDetails
} from './styles'

type PostsListProps = {
  posts: DevtoPublishedArticle[]
}

const getCardBody = (
  t: TFunction,
  post: DevtoPublishedArticle
): JSX.Element => {
  const {
    user,
    readable_publish_date,
    title,
    tag_list,
    comments_count,
    public_reactions_count,
    url
  } = post
  return (
    <PostsBodyDetails>
      <PostInformation>
        <PostAuthorImage
          src={user?.profile_image}
          alt={user?.username}
          loading="lazy"
        />
        <PostAuthorName>
          <p>
            <span>{user.name}</span>
          </p>
          <p className="date">{readable_publish_date}</p>
        </PostAuthorName>
      </PostInformation>
      <ListPostTitle>{title}</ListPostTitle>
      <ListPostTags>
        {tag_list.map((tag, index) => (
          <ListPostTag key={index}>#{tag}</ListPostTag>
        ))}
      </ListPostTags>

      <ListPostReactions>
        {comments_count > 0 && (
          <>
            <FaRegComment />
            <span>{comments_count} coment.</span>
          </>
        )}
        {public_reactions_count > 0 && (
          <>
            <BsHeart />
            <span>{public_reactions_count} reacc.</span>
          </>
        )}
      </ListPostReactions>
      <p className="bottom">
        <a href={url} target="_blank" rel="noreferrer">
          {t('see_original_post')}
        </a>
      </p>
    </PostsBodyDetails>
  )
}

const PostsList = ({ posts }: PostsListProps): JSX.Element => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <PostsListContainer>
      {posts?.map((post, index) => (
        <Card
          key={index}
          image={post.cover_image}
          cardBody={getCardBody(t, post)}
          clickable={true}
          onClick={(): void => {
            router.replace(`${router.pathname}/${post.id}`)
          }}
        />
      ))}
    </PostsListContainer>
  )
}

export default PostsList
