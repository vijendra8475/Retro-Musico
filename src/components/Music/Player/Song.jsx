import React from 'react'
import CardTop from '../MusicArea/CardTop'
import SongInfo from './SongInfo'
import './Song.css'

const Song = () => {
return (
    <div className="song">
            <CardTop left={'Player'} right={<i class="ri-music-line"></i>} />
            <SongInfo />
    </div>
)
}

export default Song
