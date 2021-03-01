import styled from 'styled-components'

import { doublePx, quadruplePx, singlePx } from '../../theme/space'
import { colors } from '../../theme/color'
import { media } from '../../theme/media'

export const PostListTitle = styled.h1`
  margin-bottom: ${singlePx()};

  ${media.greaterThan('md')`
    margin-bottom: ${doublePx()};
  `}

  ${media.greaterThan('lg')`
    display: none;
  `}
`

export const PostsListContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${singlePx()};

  ${media.greaterThan('md')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.greaterThan('lg')`
    width: 70%;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: ${quadruplePx()};
  `}
`

export const PostsBodyDetails = styled.div`
  height: 100%;
  position: relative;
`

export const PostInformation = styled.div`
  display: flex;
  flex-direction: row;
`

export const PostAuthorImage = styled.img`
  display: inline-block;
  width: 43px;
  position: relative;
  border-radius: 50%;
`

export const PostAuthorName = styled.div`
  font-size: 14px;
  width: 90%;
  margin-left: 15px;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  span {
    color: ${({ theme }) => theme.colors.main};
  }
  .date {
    margin: 0;
    color: ${colors.grey};
  }
`

export const ListPostTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`

export const ListPostTags = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`

export const ListPostTag = styled.p`
  color: ${colors.grey};
  margin-right: 10px;
  margin-top: 0;
  margin-bottom: 0;
`

export const ListPostReactions = styled.div`
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
    width: 32px !important;
    height: 32px !important;
    border-radius: 50%;
  }

  p {
    margin-left: 10px;
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
    border-radius: 50%;
  }

  p {
    margin-left: 10px;
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

    .highlight__panel {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      visibility: hidden;
    }

    .highlight__panel-action {
      display: flex;
      padding: var(--su-2);
      overflow: hidden;
      background: var(--base-60);
      border-bottom-left-radius: var(--radius);
      opacity: 0.9;
    }
  }
`
