import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption';
import LogoSection from './LogoSection';

    let options = [
        {
            'topic': 'MENU',
            subOptions: [
                {
                    name: 'Explore',
                    icon: <i className="ri-compass-3-fill"></i>
                },
                {
                    name: 'Genres',
                    icon: <i className="ri-music-2-fill"></i>
                },
                {
                    name: 'Album',
                    icon: <i className="ri-album-fill"></i>
                },
                {
                    name: 'Artist',
                    icon: <i className="ri-user-3-fill"></i>
                },
                {
                    name: 'Radio',
                    icon: <i className="ri-radio-fill"></i>
                }
            ]
        },
        {
            topic: 'LIBRARY',
            subOptions: [
                {
                    name: 'Recent',
                    icon: <i className="ri-time-line"></i>
                },
                {
                    name: 'Album',
                    icon: <i className="ri-disc-fill"></i>
                },
                {
                    name: 'Favourites',
                    icon: <i className="ri-heart-fill"></i>
                },
                {
                    name: 'Local',
                    icon: <i className="ri-folder-fill"></i>
                }
            ]
        },
        {
            topic: 'PLAYLIST',
            subOptions: [
                {
                    name: 'Create New',
                    icon: <i className="ri-add-line"></i>
                },
                {
                    name: 'Design Flow',
                    icon: <i className="ri-palette-fill"></i>
                },
                {
                    name: 'Best of 2000',
                    icon: <i className="ri-star-fill"></i>
                },
                {
                    name: 'Nightmare',
                    icon: <i className="ri-moon-fill"></i>
                }
            ]
        }
    ]

const Sidebar = ({theme}) => {

    const [bgColor, setBgColor] = useState('#19181E');
    const [color, setColor] = useState('aliceblue')
    
    useEffect(() => {
        if(theme == '#040404'){
            setBgColor('#19181E');
            setColor('aliceblue')
        }
        else {
            setBgColor('rgba(240, 248, 255, 0.633)');
            setColor('#19181E')
        }
    }, [theme])
    

  return (
    <div className='sidebar' style={{width:'20%', height:'100%',backgroundColor:bgColor, color : color }}>
        <LogoSection />
        {
            options.map((ele,id) => {
                return (
                    <div className="sideBar-area" key={id}>
                        <p style={{color:'#5D5C62', fontSize:'12px'}}>{ele.topic}</p>
                        {
                            ele.subOptions.map((elem,idx) => {
                                return <SidebarOption elem={elem} idx={idx} key={idx} />
                            })
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Sidebar