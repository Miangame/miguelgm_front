import React from 'react'

import { skillGroups } from '../../data/skills'

import { BoxSkills } from './styles'

const Skills = () => (
  <BoxSkills>
    {skillGroups.map((group, indexGroup) => (
      <div key={indexGroup}>
        <h3>{group.title}</h3>
        <p>
          {group.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </p>
      </div>
    ))}
  </BoxSkills>
)

export default Skills
