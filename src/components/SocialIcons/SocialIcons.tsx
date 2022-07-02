import React from 'react'

import { SOCIAL_MEDIA } from '../../data/socialMedia'

import { Social } from './SocialIcons.styled'

const SocialIcons = (): JSX.Element => (
  <Social>
    {SOCIAL_MEDIA.map(({ link, icon: Icon }, index) => (
      <a key={index} href={link} target="_blank" rel="noreferrer">
        <Icon size={25} />
      </a>
    ))}
  </Social>
)

export default SocialIcons
