import React from 'react'
import './CardTop.css'

const CardTop = ({left, right}) => {
  return (
    <div className="header">
            <div className="left">{left}</div>
            <div className="see-all">{right}</div>
        </div>
  )
}

export default CardTop
