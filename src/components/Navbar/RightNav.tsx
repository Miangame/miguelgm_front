import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  HOME_HREF,
  PRESENTATIONS_HREF,
  POSTS_HREF,
  EDUCATION_HREF,
  CONTACT_HREF,
  WORK_EXPERIENCE_HREF
} from '../../constants/routesHref'

import { Ul } from './styles'

interface RightNavProps {
  open?: boolean
}

const RightNav = (props: RightNavProps) => {
  const { open } = props

  const { route } = useRouter()

  return (
    <Ul open={open}>
      <li className={route === HOME_HREF ? 'active' : undefined}>
        <Link href={HOME_HREF}>
          <a>Inicio</a>
        </Link>
      </li>
      <li className={route === PRESENTATIONS_HREF ? 'active' : undefined}>
        <Link href={PRESENTATIONS_HREF}>
          <a>Ponencias</a>
        </Link>
      </li>
      <li className={route.includes(POSTS_HREF) ? 'active' : undefined}>
        <Link href={POSTS_HREF}>
          <a>Posts</a>
        </Link>
      </li>
      <li className={route === EDUCATION_HREF ? 'active' : undefined}>
        <Link href={EDUCATION_HREF}>
          <a>Formación</a>
        </Link>
      </li>
      <li className={route === WORK_EXPERIENCE_HREF ? 'active' : undefined}>
        <Link href={WORK_EXPERIENCE_HREF}>
          <a>Experiencia laboral</a>
        </Link>
      </li>
      <li className={route === CONTACT_HREF ? 'active' : undefined}>
        <Link href={CONTACT_HREF}>
          <a>Contacto</a>
        </Link>
      </li>
    </Ul>
  )
}

export default RightNav
