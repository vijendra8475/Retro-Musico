import React from 'react'
import Song from './Song'
import Controlls from './controlls'
import './Player.css'

const Player = () => {
  return (
    <div className='player'>
      <Song />
      <Controlls />
      
    </div>
  )
}

export default Player