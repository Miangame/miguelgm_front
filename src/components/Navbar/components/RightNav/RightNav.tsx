import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { HREFS } from '../../../../constants/routesHref'
import LanguageSelector from '../../../LanguageSelector/LanguageSelector'
import ThemeSwitcher from '../../../ThemeSwitcher/ThemeSwitcher'

import { Ul } from './RightNav.styled'

interface RightNavProps {
  open?: boolean
}

const RightNav = (props: RightNavProps): JSX.Element => {
  const { open } = props

  const { route } = useRouter()
  const { t } = useTranslation('navbar')

  return (
    <Ul open={open}>
      {HREFS.map(({ href: url, desc }, index) => (
        <Link href={url} key={index} passHref>
          <li className={route === url ? 'active' : undefined}>
            <a>{t(desc)}</a>
          </li>
        </Link>
      ))}
      <li>
        <ThemeSwitcher />
      </li>
      <li>
        <LanguageSelector />
      </li>
    </Ul>
  )
}

export default React.memo(RightNav)
