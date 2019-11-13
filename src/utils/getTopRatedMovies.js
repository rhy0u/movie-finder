import axios from 'axios'
import config from 'config'

const getTopRatedMovies = async () => {
  const {
    data: { results },
  } = await axios.get('https://api.themoviedb.org/3/discover/movie', {
    params: {
      api_key: config.tmdbApiKey,
      sort_by: 'popularity.desc',
    },
  })
  return results
}
export default getTopRatedMovies
