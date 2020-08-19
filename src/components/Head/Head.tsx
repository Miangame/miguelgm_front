import React from 'react'

import HeadLinks from './HeadLinks'
import HeadScripts from './HeadScripts'
import HeadDefaultMetatags from './HeadDefaultMetatags'

const Head = () => (
  <>
    <HeadDefaultMetatags />
    <HeadLinks />
    <HeadScripts />
  </>
)

export default Head
