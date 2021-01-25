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

const Contact = () => {
  return (
    <ContainerContact>
      <Avatar src="img/avatar2.jpeg" />
      <Name>Miguel Ángel Gavilán Merino</Name>
      <Description>Software Engineer | Web Developer</Description>
      <Social>
        <a
          href="https://www.linkedin.com/in/miguel-%C3%A1ngel-gavil%C3%A1n-merino-111438138/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Miangame" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://dev.to/miangame" target="_blank" rel="noreferrer">
          <FaDev size={30} />
        </a>
        <a
          href="https://twitter.com/miguel5gavilan"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={30} />
        </a>
        <a href="mailto:miangame1@gmail.com" target="_blank" rel="noreferrer">
          <AiOutlineMail size={30} />
        </a>
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
