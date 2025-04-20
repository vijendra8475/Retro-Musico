import React from 'react'
import './Poster.css'

const Poster = () => {
  return (
    <div className='Poster'>
        <div className="text">
            <div className="heading">Trending New Hits</div>

            <div className="content">
                <div className="content-top">In My Feelings</div>
                <div className="content-bottom">
                    <div className="content-bottom-left">Camila Cabello</div>
                    <div className="content-bottom-right">63M Plays</div>
                </div>
            </div>

            <div className="buttons">
                <div className='button'>Listen Now</div>
                <div className="like">
                    <i className="ri-heart-fill"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Poster