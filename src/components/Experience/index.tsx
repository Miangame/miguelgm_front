import React from 'react'
import { AiFillStar } from 'react-icons/ai'

import 'react-vertical-timeline-component/style.min.css'
import { jobs } from '../../data/jobs'
import { colors } from '../../theme/color'

import { VerticalTimelineCustom, VerticalTimelineElementCustom } from './styles'

const Experience = () => (
  <VerticalTimelineCustom className="vertical-timeline-custom-line">
    {jobs.map((job, index) => {
      const Icon = job.icon
      return (
        <VerticalTimelineElementCustom
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: job.cardColor }}
          contentArrowStyle={{
            borderRight: `7px solid ${job.cardColor}`
          }}
          date={job.dates}
          iconStyle={{
            background: job.iconBackground,
            color: '#fff',
            boxShadow: `0 0 0 4px ${job.iconShadow}, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05);`
          }}
          icon={<Icon />}
        >
          <h3 className="vertical-timeline-element-title">{job.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            <a href={job.url} target="_blank" rel="noreferrer">
              {job.place}
            </a>
          </h4>
          <h4 className="vertical-timeline-element-subtitle">{job.city}</h4>
          <ul>
            {job.abilities.map((ability, indexAbility) => (
              <li
                key={indexAbility}
                dangerouslySetInnerHTML={{ __html: ability }}
              ></li>
            ))}
          </ul>
        </VerticalTimelineElementCustom>
      )
    })}

    <VerticalTimelineElementCustom
      iconStyle={{ background: colors.secondary, color: '#fff' }}
      icon={<AiFillStar color="FFF" />}
    />
  </VerticalTimelineCustom>
)

export default Experience
