import React from 'react'

import { SOCIAL_MEDIA } from '../../data/socialMedia'

import { Link, Social } from './SocialIcons.styled'

const SocialIcons = (): JSX.Element => (
  <Social>
    {SOCIAL_MEDIA.map(({ link, icon: Icon }, index) => (
      <Link key={index} href={link} target="_blank" rel="noreferrer">
        <Icon size={25} />
      </Link>
    ))}
  </Social>
)

export default SocialIcons
