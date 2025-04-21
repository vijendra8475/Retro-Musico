import React from 'react'
import './Genere.css'
import CardTop from './CardTop';

const Genere = () => {
  const musicGenres = [
    { name: 'Rock', color: '#456A8D' }, // Dark Slate Gray
    { name: 'Pop', color: '#A69985' }, // Steel Blue
    { name: 'Jazz', color: '#A14C36' }, // Dark Olive Green
    { name: 'Classical', color: '#0E3F44' }, // Slate Gray
    // { name: 'Hip-Hop', color: '#A77997' }, // Slate Blue
    { name: 'Electronic', color: '#2E8B57' }, // Sea Green
    { name: 'Country', color: '#5647A5' }  // Cadet Blue
  ];
  return (
    <div className='generes'>
      <CardTop left={'Generes'} right={'See All'} />
      <div className="gen">
        {
          musicGenres.map((ele,idx) => {
            return <div className="genere" key={idx} style={{backgroundColor:ele.color}}>
              {ele.name}
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Genere
