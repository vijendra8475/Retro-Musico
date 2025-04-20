import { useEffect, useState } from 'react'
import Nav from './components/Nav/Nav'
import Sidebar from './components/Sidebar/Sidebar';
import './app.css'
import Poster from './components/Poster/Poster';
import Music from './components/Music/Music';


function App() {
  const [blackMode, setBlackMode] = useState(true)
  const [theme, setTheme] = useState('black');
  const [textColor, setTextColor] = useState('aliceblue')

  const modeChanger = () => {
    setBlackMode(!blackMode);
  }
    useEffect(() => {
      if(blackMode) {
        setTextColor('aliceblue');
        setTheme('#040404');
      }
      else {
        setTextColor('#040404');
        setTheme('aliceblue');
      }                                 
    }, [blackMode])
    

  return (
    <div className='app' style={{ color: textColor, backgroundColor: theme }}>
      <Sidebar theme={theme} />
      
      <div className="main" style={{width : '100%'}}>
          <Nav modeChanger={modeChanger} textColor={textColor} theme={theme} />
          <Poster />
          
          <Music />
      </div>
    </div>
  )
}

export default App
