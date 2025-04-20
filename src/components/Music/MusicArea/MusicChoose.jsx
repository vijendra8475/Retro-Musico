import React from 'react'
import Genere from './Genere'
import TopChart from './TopChart'
import './MusicChoose.css'

const MusicChoose = () => {
  return (
    <div className='choice'>
        <Genere />
        <TopChart />
    </div>
  )
}

export default MusicChoose