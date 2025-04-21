import React from 'react'
import CardTop from './CardTop'
import './TopChart.css'
import ArtistChart from './ArtistChart'

const TopChart = () => {
  return (
    <div className='TopChart'>
      <CardTop left={'Top Chart'} right={'See All'} />
      <ArtistChart />
    </div>
  )
}

export default TopChart
