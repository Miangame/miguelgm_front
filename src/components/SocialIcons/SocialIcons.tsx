import React from 'react'

import { SOCIAL_MEDIA } from '../../data/socialMedia'

import { Link, Social, StyledIcon } from './SocialIcons.styled'

const SocialIcons = (): JSX.Element => (
  <Social>
    {SOCIAL_MEDIA.map(({ link, icon: Icon }, index) => (
      <Link key={index} href={link} target="_blank" rel="noreferrer">
        <StyledIcon as={Icon} />
      </Link>
    ))}
  </Social>
)

export default SocialIcons
