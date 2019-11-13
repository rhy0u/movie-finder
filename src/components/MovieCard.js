import React from 'react'
import moment from 'moment'
import styled, { css } from 'styled-components'
import { up } from '@xstyled/system'
import image from '../../icons/image.svg'

const MoviePoster = styled.img`
  border-radius: 10px;
  margin-bottom: 10px;
  fill: #586e94;
  background-color: rgba(255, 255, 255, 0.3);
  ${p =>
    p.variant === 'small'
      ? css`
          width: 86px;
          height: 124px;
          ${up(
            'md',
            css`
              width: 136px;
              height: 200px;
            `,
          )}
        `
      : css`
          width: 136px;
          height: 200px;
        `};
`

const MovieTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const MovieReleaseYear = styled.span`
  font-size: 12px;
  color: #586e94;
`

const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  ${up('md', 'margin-bottom: 40px;')}
  ${p =>
    p.variant === 'small'
      ? css`
          width: 86px;
          ${up(
            'md',
            css`
              width: 138px;
            `,
          )}
        `
      : css`
          width: 138px;
        `};
`

const MovieCard = ({ movie, variant = 'none' }) => {
  return (
    <MovieCardWrapper variant={variant}>
      <MoviePoster
        variant={variant}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
            : image
        }
      />
      <MovieTitle title={movie.title}>{movie.title}</MovieTitle>
      <MovieReleaseYear>
        {movie.release_date && moment(movie.release_date).get('year')}
      </MovieReleaseYear>
    </MovieCardWrapper>
  )
}

export default MovieCard
