import React from 'react'
import { GetStaticProps } from 'next'

import { presentations } from '../data/presentations'
import PresentationsList from '../components/presentations/PresentationsList'
import { PresentationsListTitle } from '../components/presentations/styles'

const Presentations = () => (
  <>
    <PresentationsListTitle>Ponencias</PresentationsListTitle>
    <PresentationsList presentations={presentations} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Presentations
