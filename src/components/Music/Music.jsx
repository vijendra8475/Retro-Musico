import React from 'react'
import Musics from './MusicArea/Musics'
import Player from './Player/Player'

const Music = () => {
  return (
    <div style={{display:'flex', width:'100%', alignItems:'flex-start',padding:'1%',gap:'20px'}}>
        <Musics />
        <Player />
    </div>
  )
}

export default Music