import * as types from './actionsTypes'

export const setCity = city => {
    return {
        type: types.set_city,
        city,
    }
}

export const addMovies = (city, movies) => {
    return {
        type: types.add_movies,
        city,
        movies,
    }
}

export const setPagination = (city, pagination) => {
    return {
        type: types.set_pagination,
        city,
        pagination,
    }
}

export const setMoviesInTheater = (city, movieIDsInTheater) => {
    return {
        type: types.set_movies_in_theater,
        city,
        ids: movieIDsInTheater,
    }
}