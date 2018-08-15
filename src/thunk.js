import { addMovies, setMoviesInTheater, setPagination, } from './actionCreators'

const fetchMovies = (dispatch, getState) => {
  const { currentCity, pagination, } = getState()
  const currentPagination = pagination[currentCity]

  if (currentPagination) {

    const { start, count } = currentPagination
    const url = `/v2/movie/in_theaters?city=${currentCity}&start=${start}&count=${count}`

    fetch(url)
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(`error: ${res.status}, ${res.statusText}`)
      })
      .then(payload => {
        const movieDigests = payload.subjects.map(m => ({
          id: m.id,
          title: m.title,
          rating: m.rating.average,
          image: m.images.large,
          directors: m.directors.map(d => d.name),
          casts: m.casts.map(c => c.name)
        }))

        dispatch(addMovies(currentCity, movieDigests))
        dispatch(setMoviesInTheater(currentCity, movieDigests.map(m => m.id)))
        dispatch(setPagination(currentCity, { start: currentPagination.start + currentPagination.count, count: currentPagination.count, total: payload.total }))
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    console.log(`pagination of ${currentCity} not found`)
  }
}

export {
  fetchMovies,
}