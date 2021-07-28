import React from 'react'

import HeadLinks from './HeadLinks'
import HeadDefaultMetatags from './HeadDefaultMetatags'

const Head = () => (
  <>
    <HeadDefaultMetatags />
    <HeadLinks />
  </>
)

export default React.memo(Head)
