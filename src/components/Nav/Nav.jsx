import React, { useState } from 'react'
import Sections from './Sections'
import Searchbox from './Searchbox'
import MiniIcon from './MiniIcon'
import Profile from './Profile'
import 'remixicon/fonts/remixicon.css'
import './nav.css'


const Nav = ({modeChanger, textColor, theme}) => {
  return (
    <div className='nav' style={{ color: textColor, backgroundColor: theme }}>
        <Sections />

        <Searchbox textColor={textColor} theme={theme} />
        <div style={{display:'flex', alignItems:'center', justifyContent:'spaceBetween', gap:'20px', fontSize:'20px'}}>
            <p onClick={modeChanger}>
                {
                    textColor === 'black' ?
                    <i className="ri-moon-fill"></i>
                    : <i className="ri-sun-fill"></i>
                }
            </p>
            <MiniIcon />
        </div>
        <Profile textColor={textColor} theme={theme}/>
    </div>
  )
}

export default Nav