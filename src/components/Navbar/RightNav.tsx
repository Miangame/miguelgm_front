import React from 'react'
import Link from 'next/link'

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

  return (
    <Ul open={open}>
      <li>
        <Link href={HOME_HREF}>
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href={PRESENTATIONS_HREF}>
          <a>Ponencias</a>
        </Link>
      </li>
      <li>
        <Link href={POSTS_HREF}>
          <a>Posts</a>
        </Link>
      </li>
      <li>
        <Link href={EDUCATION_HREF}>
          <a>Formación</a>
        </Link>
      </li>
      <li>
        <Link href={WORK_EXPERIENCE_HREF}>
          <a>Experiencia laboral</a>
        </Link>
      </li>
      <li>
        <Link href={CONTACT_HREF}>
          <a>Contacto</a>
        </Link>
      </li>
    </Ul>
  )
}

export default RightNav
