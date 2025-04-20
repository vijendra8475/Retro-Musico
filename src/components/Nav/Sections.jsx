import React from 'react'
import './sections.css'

const Sections = () => {
    let sectionsInfo = [
        'Music',
        'Podcast',
        'Live'
    ]
  return (
    <div className="section">
            {
                sectionsInfo.map((ele, idx) => {
                    return <p key={idx}>{ele}</p>
                })
            }
    </div>
  )
}

export default Sections