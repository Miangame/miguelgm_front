import { useTranslation } from 'next-i18next'
import React from 'react'

import { skillGroups } from '../../data/skills'

import { BoxSkills } from './styles'

const Skills = () => {
  const { t } = useTranslation('skills')
  return (
    <BoxSkills>
      {skillGroups.map((group, indexGroup) => {
        const { icon, title, skills } = group
        return (
          <div key={indexGroup}>
            <h3>
              {icon}{' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: t(title, {
                    interpolation: { escapeValue: false }
                  })
                }}
              ></span>
            </h3>
            <p>
              {skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
          </div>
        )
      })}
    </BoxSkills>
  )
}

export default Skills
