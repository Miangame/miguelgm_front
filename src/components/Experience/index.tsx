import React, { useContext } from 'react'
import 'react-vertical-timeline-component/style.min.css'
import { AiFillStar } from 'react-icons/ai'
import { ThemeContext } from 'styled-components'
import { useTranslation } from 'next-i18next'

import { jobs } from '../../data/jobs'
import { colors } from '../../theme/color'

import { VerticalTimelineCustom, VerticalTimelineElementCustom } from './styles'

const Experience = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { t } = useTranslation('experience')

  return (
    <VerticalTimelineCustom className="vertical-timeline-custom-line">
      {jobs.map((job, index) => {
        const {
          icon: Icon,
          cardColor,
          iconBackground,
          dateFrom,
          dateTo,
          iconShadow,
          title,
          city,
          remote,
          url,
          place,
          abilities
        } = job
        return (
          <VerticalTimelineElementCustom
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: cardColor }}
            contentArrowStyle={{
              borderRight: `7px solid ${cardColor}`
            }}
            date={`${t(dateFrom)} - ${t(dateTo)}`}
            iconStyle={{
              background: iconBackground,
              color: '#fff',
              boxShadow: `0 0 0 4px ${iconShadow}, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)`
            }}
            icon={<Icon />}
          >
            <h3 className="vertical-timeline-element-title">{t(title)}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{ color: colors.primary }}
              >
                {place}
              </a>
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              {city} {remote && `(${t('remote')})`}
            </h4>
            <ul>
              {abilities?.map((ability, indexAbility) => (
                <li
                  key={indexAbility}
                  dangerouslySetInnerHTML={{
                    __html: t(ability, {
                      interpolation: { escapeValue: false }
                    })
                  }}
                ></li>
              ))}
            </ul>
          </VerticalTimelineElementCustom>
        )
      })}

      <VerticalTimelineElementCustom
        iconStyle={{ background: themeContext.colors.main, color: '#fff' }}
        icon={<AiFillStar color="FFF" />}
      />
    </VerticalTimelineCustom>
  )
}

export default Experience
