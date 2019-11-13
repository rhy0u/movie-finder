import axios from 'axios'
import config from 'config'

const getGenres = async () => {
  const {
    data: { genres },
  } = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
    params: { api_key: config.tmdbApiKey },
  })
  return genres
}

export default getGenres
