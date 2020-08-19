import React from 'react'

import HeadLinks from './HeadLinks'
import HeadScripts from './HeadScripts'
import HeadDefaultMetatags from './HeadDefaultMetatags'

const Head = () => (
  <>
    <HeadDefaultMetatags />
    <HeadLinks />
    <HeadScripts />
    <title>👨🏽‍💻 Miguel A. Gavilán | Web developer</title>
  </>
)

export default Head
