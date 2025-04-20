import React from 'react'
import './Genere.css'

const Genere = () => {
  const musicGenres = [
    { name: 'Rock', color: '#2F4F4F' }, // Dark Slate Gray
    { name: 'Pop', color: '#4682B4' }, // Steel Blue
    { name: 'Jazz', color: '#556B2F' }, // Dark Olive Green
    { name: 'Classical', color: '#708090' }, // Slate Gray
    { name: 'Hip-Hop', color: '#6A5ACD' }, // Slate Blue
    { name: 'Electronic', color: '#2E8B57' }, // Sea Green
    { name: 'Country', color: '#5F9EA0' }  // Cadet Blue
  ];
  return (
    <div className='generes'>
      {
        musicGenres.map((ele,idx) => {
          return <div className="genere" key={idx} style={{backgroundColor:ele.color}}>
            {ele.name}
          </div>
        })
      }
    </div>
  )
}

export default Genere
