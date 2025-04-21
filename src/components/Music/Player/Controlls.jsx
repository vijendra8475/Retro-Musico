import React from 'react'
import './Controlls.css'

const Controlls = () => {
  return (
      <div className="controlls">
        <div className="top">
            <i class="ri-loop-right-line"></i>
            <div className="top-center">
                <i class="ri-skip-left-fill"></i>
                <i class="ri-play-fill play-pause"></i>
                <i class="ri-skip-right-fill"></i>
            </div>
            <i class="ri-shuffle-line"></i>
        </div>
        <div className="bottom">
            <i className="ri-arrow-up-s-line"></i>
            <p>Lyrics</p>
        </div>
      </div>
  )
}

export default Controlls
