import { useTranslation } from 'next-i18next'
import React, { memo } from 'react'

import { skillGroups } from '../../data/skills'

import { BoxSkills, Skill } from './Skills.styled'

const Skills = (): JSX.Element => {
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
            <Skill>
              {skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </Skill>
          </div>
        )
      })}
    </BoxSkills>
  )
}

export default memo(Skills)
