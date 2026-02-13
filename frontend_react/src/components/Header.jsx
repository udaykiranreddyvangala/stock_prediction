import React from 'react'
import Button from './Button'
const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a href="#" className='navbar-brand text-info'>Stock Prediction Portal</a>
        <div>
            <Button text="Login" class="btn-info"/>
            &nbsp;
            <Button text="Register" class="btn-outline-info"/>
        </div>
    </nav>
    </>
  )
}

export default Header