import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'


const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type : "TOGGLE"})
    }
  return (
    <div className='t'>
        <img src={Sun} className='t-icon'/>
        <img src={Moon} className='t-icon'/>
        <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : "25px"}}></div>
    </div>
  )
}

export default Toggle