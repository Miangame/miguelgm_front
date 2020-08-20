import React from 'react'
import { useRouter } from 'next/router'

import DevtoService from '../../services/DevtoService'
import { useSWR } from '../../hooks/useSWR'
import { DevtoArticle } from '../../interfaces/devto'

const PostPage = () => {
  const router = useRouter()
  const {
    query: { id }
  } = router

  const { data: article } = useSWR<DevtoArticle>(`article-${id}`, () =>
    DevtoService.getArticle(id as string)
  )

  return <></>
}

export default PostPage
