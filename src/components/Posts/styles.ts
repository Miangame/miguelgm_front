import styled from 'styled-components'

import { doublePx, singlePx } from '../../theme/space'
import { colors } from '../../theme/color'
import { media } from '../../theme/media'

export const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  width: 70%;
  padding: 15px 25px;
  margin-bottom: ${doublePx()};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
`

export const CardAuthor = styled.div`
  margin-top: 0;
  display: flex;
  flex-flow: row;
  align-items: center;
`

export const CardAuthorName = styled.div`
  font-size: 14px;
  width: 90%;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  span {
    color: ${colors.secondary};
  }
  .date {
    margin: 0;
    color: ${colors.grey};
  }
`

export const CardAuthorImage = styled.div`
  width: 10%;
  display: inline-block;
  margin-right: 15px;
  position: relative;

  ${media.greaterThan('md')`
    margin-right: 5px;
  `}

  img {
    border-radius: 50%;
  }

  .firstImage {
    width: 30px;
  }

  .secondaryImage {
    width: 20px;
    position: absolute;
    bottom: 0;
    left: 13px;
  }
`

export const CardTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`

export const CardTags = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`

export const CardTag = styled.p`
  color: ${colors.grey};
  margin-right: 10px;
  margin-top: 0;
`

export const CardReactions = styled.div`
  margin-top: ${singlePx()};
  display: flex;
  flex-flow: row;
  align-items: center;

  span {
    margin-left: 5px;
    margin-right: 15px;
    font-size: 14px;
    color: ${colors.grey};
  }
`

export const PostContainer = styled.div`
  width: 100%;

  ${media.greaterThan('md')`
    width: 80%;
  `}
`

export const PostTitle = styled.h1``

export const PostOrganization = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50%;
  }
`

export const PostTags = styled.div`
  span {
    margin-right: 10px;
    color: ${colors.grey};
  }
`

export const PostAuthor = styled.div`
  margin-top: ${singlePx()};
  display: flex;
  flex-flow: row;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50%;
  }

  .date {
    color: ${colors.grey};
    font-size: 14px;
  }
`

export const PostBody = styled.div`
  line-height: 25px;

  code {
    background: #dedede;
  }

  .article-body-image-wrapper {
    display: flex;
    justify-content: center;

    img {
      border-radius: 5px;
    }
  }

  .highlight {
    padding: 10px;
    background: #08090a;
    color: #f8f8f2;
    white-space: pre;
    font-size: 16px;
    border-radius: 5px;
    overflow-x: auto;

    code {
      background: transparent;
    }

    .c {
      color: #808080;
    }

    .nb {
      color: #f8f8f2;
    }

    .nt,
    .o {
      color: #f9690e;
    }

    .k,
    .kd {
      color: #f39c12;
    }

    .p {
      color: #f8f8f2;
    }

    .nx,
    .na {
      color: #7ed07e;
    }

    .dl,
    .s1 {
      color: #f2ca27;
    }

    .c1 {
      color: #808080;
    }
  }
`
