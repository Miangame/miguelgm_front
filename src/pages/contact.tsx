/* eslint-disable camelcase */
import React from 'react'
import { GetStaticProps } from 'next'

import { SOCIAL_MEDIA } from '../data/socialMedia'
import {
  Avatar,
  ContainerContact,
  Description,
  Name,
  Social
} from '../components/pages/contact/styles'

const Contact = () => {
  return (
    <ContainerContact>
      <Avatar src="img/avatar2.jpeg" loading="lazy" />
      <Name>Miguel Ángel Gavilán Merino</Name>
      <Description>Software Engineer | Web Developer</Description>
      <Social>
        {SOCIAL_MEDIA.map(({ link, icon }, index) => {
          const Icon = icon
          return (
            <a key={index} href={link} target="_blank" rel="noreferrer">
              <Icon size={30} />
            </a>
          )
        })}
      </Social>
    </ContainerContact>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Contact
