// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionsMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  return (
    <div className="page-container">
      <img
        className="prime-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1 className="movies-heading">Action Movies</h1>
      <div className="movie-slider-container">
        <MoviesSlider actionsMoviesList={actionsMoviesList} />
      </div>
      <h1 className="movies-heading">Comedy Movies</h1>
      <div className="movie-slider-container">
        <MoviesSlider actionsMoviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
