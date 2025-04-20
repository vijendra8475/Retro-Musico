import React from 'react'
import './searchbox.css'

const Searchbox = ({textColor, theme}) => {
  return (
    <div className='searchbox' style={{ color: textColor, backgroundColor: '#1E1E1E' }}>
        <i className="ri-search-line"></i>
        <input type="text" placeholder='Type here to search...' />
    </div>
  )
}

export default Searchbox