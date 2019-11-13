import React, { useState, useEffect } from 'react'
import { Box } from '@smooth-ui/core-sc'
import styled from 'styled-components'
import MovieCard from 'components/MovieCard'
import Paginate from 'components/Paginate'
import Select from 'components/Select'
import Title from 'components/Title'
import getAllMovies from 'utils/getAllMovies'
import getMovieGenres from 'utils/getMovieGenres'

const FilterLabel = styled.span`
  margin-top: 12px;
  font-size: 12px;
  color: #586e94;
  margin-right: 8px;
  white-space: nowrap;
`

const AllMovies = () => {
  const [movies, setMovies] = useState()
  const [genre, setGenre] = useState([])
  const [genres, setGenres] = useState([])
  const [sort, setSort] = useState()
  const [page, setPage] = useState(0)
  useEffect(() => {
    getAllMovies({ sort, genre, page: page + 1 }).then(movies =>
      setMovies(movies),
    )
  }, [page, sort, genre])
  useEffect(() => {
    getMovieGenres().then(genres => setGenres(genres))
  }, [page, sort])
  return (
    <>
      <Box row>
        <Title>Tous les films</Title>
      </Box>
      <Box row>
        <Box display="flex" mr={50} col={{ xs: 1 / 2, md: 1 / 3 }} mb={20}>
          <FilterLabel>Trier par : </FilterLabel>
          <Select
            placeholder="Ordre alphabétique"
            options={[
              { label: 'Ordre alphabétique', value: 'original_title.asc' },
              { label: 'Popularité', value: 'popularity.desc' },
              { label: 'Date de sortie', value: 'release_date.asc' },
            ]}
            onChange={setSort}
            value={sort}
          />
        </Box>
        <Box display="flex" col={{ xs: 1 / 2, md: 1 / 3 }} mb={20}>
          <FilterLabel>Filter par : </FilterLabel>
          <Select
            placeholder="Genre"
            options={genres.map(genre => ({
              value: genre.id,
              label: genre.name,
            }))}
            onChange={setGenre}
            value={genre}
          />
        </Box>
      </Box>
      {movies && (
        <>
          <Box row width={1} display="flex" justifyContent="space-between">
            {movies.results.map(movie => (
              <Box
                mt={{ xs: 20, md: 30 }}
                col={{ xs: 1 / 2, md: 1 / 4, lg: 1 / 5 }}
                key={movie.id}
                display="flex"
                justifyContent="center"
              >
                <MovieCard movie={movie} />
              </Box>
            ))}
          </Box>
          <Box row width={1} display="flex" justifyContent="center">
            <Paginate
              pageCount={movies.total_pages}
              pageRangeDisplayed={9}
              marginPagesDisplayed={0}
              onPageChange={value => setPage(value.selected)}
              previousLabel="<"
              nextLabel=">"
            />
          </Box>
        </>
      )}
    </>
  )
}
export default AllMovies
