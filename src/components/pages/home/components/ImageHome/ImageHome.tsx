import React, { memo } from 'react'

import { ImageHomeContainer, ProfileImageHome } from './ImageHome.styled'

const ImageHome = (): JSX.Element => (
  <ImageHomeContainer>
    <ProfileImageHome alt="profile" src="/img/profile.webp" loading="lazy" />
  </ImageHomeContainer>
)

export default memo(ImageHome)
