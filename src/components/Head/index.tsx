import React from 'react'

import HeadLinks from './HeadLinks'
import HeadDefaultMetatags from './HeadDefaultMetatags'

const Head = (): JSX.Element => (
  <>
    <HeadDefaultMetatags />
    <HeadLinks />
  </>
)

export default React.memo(Head)
