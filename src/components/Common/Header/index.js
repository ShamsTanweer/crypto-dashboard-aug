import React from 'react'
import './styles.css'
import TemporaryDrawer from './Drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
      <h1 className='logo'>CryptoTracker<span style={{color:'var(--blue)'}}>.</span></h1>
      <div className='links'>
          <Link to='/'>
            <p className='link'>Home</p>
          </Link>
          <Link to='/Compare'>
            <p className='link'>compare</p>
          </Link>
          <Link to='/Watchlist'>
            <p className='link'>watchlist</p>
          </Link>
          <Link to="/Dashboard">
            <Button text={"Dashboard"} 
            onClick={()=>console.log('button Clicked')}
            />
          </Link>

      </div>
      <div className='mobile-drawer'>
        <TemporaryDrawer/>
      </div>
    </div>
  )
}

export default Header