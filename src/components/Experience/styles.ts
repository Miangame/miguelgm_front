import styled from 'styled-components'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import { colors } from '../../theme/color'
import { media } from '../../theme/media'

export const VerticalTimelineCustom = styled(VerticalTimeline)`
  &::before {
    background: #424242;
  }

  /* Icon container's border */
  & .vertical-timeline-element--work .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #1976d2, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  & .vertical-timeline-element--education .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #c2185b, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  & ul li {
    margin-bottom: 15px;
  }
`

export const VerticalTimelineElementCustom = styled(VerticalTimelineElement)`
  color: ${({ theme }) => theme.colors.black};

  .vertical-timeline-element-date {
    margin: 0 10px;
    color: ${colors.black};
  }

  a {
    color: ${colors.primary};
  }

  ${media.greaterThan('lg')`
    .vertical-timeline-element-date {
      color: ${({ theme }) => theme.text};
    }
  `}
`
