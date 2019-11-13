import axios from 'axios'
import config from 'config'

const getAllMovies = async ({ sort, genre, page }) => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/discover/movie',
    {
      params: {
        api_key: config.tmdbApiKey,
        sort_by: sort?.value || 'original_title.asc',
        with_genres: genre?.value,
        page,
      },
    },
  )
  return data
}
export default getAllMovies
