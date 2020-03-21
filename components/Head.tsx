import React from "react"

import HeadLinks from "./HeadLinks"
import HeadScripts from "./HeadScripts"

const Head = () => (
  <React.Fragment>
    <HeadScripts />
    <HeadLinks />
  </React.Fragment>
)

export default Head