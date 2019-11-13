import React from 'react'
import MovieCard from 'components/MovieCard'

export default {
  title: 'MovieCard',
}

export const movieCard = () => (
  <MovieCard
    movie={{
      title: 'Joker',
      release_date: '2019-10-04',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    }}
  />
)
export const smallMovieCard = () => (
  <MovieCard
    variant="small"
    movie={{
      title: 'Joker',
      release_date: '2019-10-04',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    }}
  />
)

movieCard.story = {
  name: 'normal',
}

smallMovieCard.story = {
  name: 'small',
}
