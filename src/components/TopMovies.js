import React, { useState, useEffect } from 'react'
import MovieCard from 'components/MovieCard'
import Title from 'components/Title'
import getTopRatedMovies from 'utils/getTopRatedMovies'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Carousel from 'components/Carousel'

const TopMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  useEffect(() => {
    getTopRatedMovies().then(movies => setTopRatedMovies(movies.slice(0, 10)))
  }, [])
  return (
    <div>
      <Title>Les 10 meilleurs films</Title>
      <Carousel slidesToShow={4}>
        {topRatedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} variant="small" />
        ))}
      </Carousel>
    </div>
  )
}

export default TopMovies
