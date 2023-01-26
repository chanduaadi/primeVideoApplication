// Write your code here
import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachMoveItem} = props
  const {thumbnailUrl, videoUrl} = eachMoveItem
  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="movie-card-button" type="button">
            <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="video-display-container">
            <button
              data-testid="closeButton"
              className="close-button"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
