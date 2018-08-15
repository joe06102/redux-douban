import { combineReducers } from 'redux'
import * as types from './actionsTypes'

const currentCity = (state = '杭州', action) => {
    if(action.type === types.set_city) {
        const newState = action.city
        return newState
    }

    return state
}

const movies = (state = {}, action) => {
    if(action.type === types.add_movies) {
        const { movies } = action
        const newState = {}

        Object.assign(newState, state)
        movies.forEach(m => newState[m.id] = m)

        return newState
    }

    return state
}

const inTheater = (state = {}, action) => {
    if(action.type === types.set_movies_in_theater) {
        const { city, ids = [] } = action
        const newState = {}

        Object.assign(newState, state)
        newState[city] = Array.isArray(state[city]) ? state[city].concat(ids) : ids

        return newState
    }

    return state
}

const pagination = (state = { '杭州': { start: 0, count: 10, total: 20, } }, action) => {
    if(action.type === types.set_pagination) {
        const { city, pagination } = action
        const newState = {}
        const oldPaignation = state[city] || { start: 0, count: 10, total: 20, }

        Object.assign(newState, state)
        newState[city] = { ...oldPaignation, ...pagination }

        return newState
    }
    return state
}

export default combineReducers({
    currentCity,
    pagination,
    movies,
    inTheater,
})