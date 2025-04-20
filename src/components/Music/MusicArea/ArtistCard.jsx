import React from 'react'
import './Artistcard.css'

const ArtistCard = ({picture, singer, plays}) => {
  return (
    <div className='ArtistCard'>
      <img src={picture} alt="" />
      <div className="artist">
        <p>{singer}</p>
        <h5>{plays} Plays</h5>
      </div>
    </div>
  )
}

export default ArtistCard
