import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { HREFS } from '../../constants/routesHref'
import Toggle from '../Toggle'

import { Ul } from './styles'

interface RightNavProps {
  open?: boolean
}

const RightNav = (props: RightNavProps) => {
  const { open } = props

  const { route } = useRouter()

  return (
    <Ul open={open}>
      {HREFS.map((href, index) => (
        <li key={index} className={route === href.href ? 'active' : undefined}>
          <Link href={href.href}>
            <a>{href.desc}</a>
          </Link>
        </li>
      ))}
      <li>
        <Toggle />
      </li>
    </Ul>
  )
}

export default React.memo(RightNav)
