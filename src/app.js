import React, { Component } from 'react'
import propTypes from 'prop-types'
import Card from './components/Card'
import LoadButton from './components/LoadButton'
import { setCity, setPagination, } from './actionCreators'
import { fetchMovies } from './thunk'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.props.store.getState()
    this.dispatch = this.props.store.dispatch
    this.unSubRedux = this.props.store.subscribe(() => {
      this.setState(this.props.store.getState())
    })
    this.cityOnChange = this.cityOnChange.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  cityOnChange(e) {
    const city = e.target.value
    this.dispatch(setCity(city))
    this.dispatch(setPagination(city, null))
    this.dispatch(fetchMovies)
  }

  loadMore(e) {
    this.dispatch(fetchMovies)
  }

  componentDidMount() {
    this.dispatch(fetchMovies)
  }

  render() {

    const { currentCity, movies, inTheater, pagination } = this.state
    const currentPagination = pagination[currentCity]
    const moviesInCurrentCity = (inTheater[currentCity] && inTheater[currentCity].map(id => movies[id])) || []

    return (
      <React.Fragment>
        <header style={{ minWidth: '600px', height: '50px', backgroundColor: '#396', padding: '10px', boxSizing: 'border-box', }}>
          <h1 style={{ fontSize: '20px', color: '#fff', float: 'left', margin: '0', padding: '0' }}>douban movies</h1>
          <nav style={{ height: '100%', textAlign: 'right' }}>
            <select value={currentCity} onChange={this.cityOnChange} style={{ fontSize: '16px' }}>
              <option value='杭州'>杭州</option>
              <option value='苏州'>苏州</option>
              <option value='北京'>北京</option>
            </select>
          </nav>
        </header>
        <main style={{ overflow: 'hidden', maxWidth: '60%', minWidth: '600px', margin: 'auto', minHeight: 'calc(100vh - 50px)', boxShadow: '0 0 4px 1px #ccc', backgroundColor: '#fff', boxSizing: 'border-box', }}>
          {
            moviesInCurrentCity.map(movie => <Card key={movie.id} title={movie.title} rating={movie.rating} image={movie.image} directors={movie.directors} casts={movie.casts} />)
          }
          {
            currentPagination.start < currentPagination.total ? <LoadButton loadMore={this.loadMore} /> : null
          }
        </main>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  store: propTypes.object.isRequired,
}

export default App
