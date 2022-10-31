import React, { memo } from 'react'

import {
  ImageHomeContainer,
  ProfileImageHome,
  ProfileImageHomeContainer
} from './ImageHome.styled'

const ImageHome = (): JSX.Element => (
  <ImageHomeContainer>
    <ProfileImageHomeContainer>
      <ProfileImageHome
        alt="profile"
        src="/img/profile.webp"
        loading="lazy"
        fill
      />
    </ProfileImageHomeContainer>
  </ImageHomeContainer>
)

export default memo(ImageHome)
