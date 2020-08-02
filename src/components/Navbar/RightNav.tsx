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
        <Link href={HOME_HREF}>Inicio</Link>
      </li>
      <li>
        <Link href={PRESENTATIONS_HREF}>Ponencias</Link>
      </li>
      <li>
        <Link href={POSTS_HREF}>Posts</Link>
      </li>
      <li>
        <Link href={EDUCATION_HREF}>Formación</Link>
      </li>
      <li>
        <Link href={WORK_EXPERIENCE_HREF}>Experiencia laboral</Link>
      </li>
      <li>
        <Link href={CONTACT_HREF}>Contacto</Link>
      </li>
    </Ul>
  )
}

export default RightNav
