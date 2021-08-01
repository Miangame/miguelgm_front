import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { HREFS } from '../../constants/routesHref'
import ToggleTheme from '../ToggleTheme'
import LanguageSelector from '../LanguageSelector'

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
        <Link href={href.href} key={index}>
          <li className={route === href.href ? 'active' : undefined}>
            <a>{href.desc}</a>
          </li>
        </Link>
      ))}
      <li>
        <ToggleTheme />
      </li>
      <li>
        <LanguageSelector />
      </li>
    </Ul>
  )
}

export default React.memo(RightNav)
