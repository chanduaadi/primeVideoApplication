// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {actionsMoviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {actionsMoviesList.map(eachMoveItem => (
        <MovieItem key={eachMoveItem.id} eachMoveItem={eachMoveItem} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
