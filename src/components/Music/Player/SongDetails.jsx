import React from 'react'

const SongDetails = () => {
  return (
    <div className='SongDetails' style={{display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column', gap:"3px"}}>
        <h2 style={{fontWeight:'600'}}>Shape of You</h2>
        <h4 style={{fontWeight:'500'}}>Ed Sheeran</h4>
        <h5 style={{fontWeight:'600',color:'#989898'}}>Best of 2020</h5>
    </div>
  )
}

export default SongDetails
