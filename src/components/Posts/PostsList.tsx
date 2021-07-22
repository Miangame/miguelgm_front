/* eslint-disable camelcase */
import React from 'react'
import { useRouter } from 'next/router'
import { BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'

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

const getCardBody = (post: DevtoPublishedArticle) => (
  <PostsBodyDetails>
    <PostInformation>
      <PostAuthorImage
        src={post.user?.profile_image}
        alt={post.user?.username}
        loading="lazy"
      />
      <PostAuthorName>
        <p>
          <span>{post.user.name}</span>
        </p>
        <p className="date">{post.readable_publish_date}</p>
      </PostAuthorName>
    </PostInformation>
    <ListPostTitle>{post.title}</ListPostTitle>
    <ListPostTags>
      {post.tag_list.map((tag, index) => (
        <ListPostTag key={index}>#{tag}</ListPostTag>
      ))}
    </ListPostTags>

    <ListPostReactions>
      {post.comments_count > 0 && (
        <>
          <FaRegComment />
          <span>{post.comments_count} coment.</span>
        </>
      )}
      {post.public_reactions_count > 0 && (
        <>
          <BsHeart />
          <span>{post.public_reactions_count} reacc.</span>
        </>
      )}
    </ListPostReactions>
    <p className="bottom">
      <a href={post.url} target="_blank" rel="noreferrer">
        Ver post original
      </a>
    </p>
  </PostsBodyDetails>
)

const PostsList = ({ posts }: PostsListProps) => {
  const router = useRouter()
  return (
    <PostsListContainer>
      {posts?.map((post, index) => (
        <Card
          key={index}
          image={post.cover_image}
          cardBody={getCardBody(post)}
          onClick={() => {
            router.replace(`${router.pathname}/${post.id}`)
          }}
        />
      ))}
    </PostsListContainer>
  )
}

export default PostsList
