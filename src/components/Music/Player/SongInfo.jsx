import React from 'react'
import SongDetails from './SongDetails'
import './SongInfo.css'

const SongInfo = () => {
  return (
    <div className='SongInfo'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3_DmF-D7Nfee1Iu5Z_ftUYlW03gOsb_ZMQ&s" alt="" />
        <SongDetails />
    </div>
  )
}

export default SongInfo
