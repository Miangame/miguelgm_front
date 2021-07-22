/* eslint-disable camelcase */
import React from 'react'
import { FaTwitter, FaLinkedin, FaDev, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { GetStaticProps } from 'next'

import { Avatar } from '../components/Contact/Avatar'
import {
  Name,
  Description,
  Social,
  ContainerContact
} from '../components/Contact/styles'
import { SOCIAL_MEDIA } from '../data/socialMedia'

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
