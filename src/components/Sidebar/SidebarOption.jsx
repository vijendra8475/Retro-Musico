import React from 'react'

const SidebarOption = ({elem, idx}) => {
  return (
    <p className='option' key={idx}>
                                    {elem.icon}
                                    {elem.name}
                                </p>
  )
}

export default SidebarOption