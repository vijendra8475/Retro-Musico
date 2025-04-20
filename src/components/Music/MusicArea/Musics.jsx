import React from 'react'
import TopArtist from './TopArtist'
import MusicChoose from './MusicChoose'
import './Musics.css'

const Musics = () => {
  return (
    <div className='muisc-part'>
        <TopArtist />
        <MusicChoose />
    </div>
  )
}

export default Musics