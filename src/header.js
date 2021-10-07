import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'

function header({isMenuOpen, setIsMenuOpen}) {
    return (
        <div className='header'>
            <div className='header__logo'>
                <Link to='/'>
                    <img className='header__logoImg' 
                    src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
                    alt=''
                    >
                    </img>
                </Link>
            </div>
            <div className='header__links'>
                <Link to='/'>Model s</Link>
                <Link to='/'>Model 3</Link>
                <Link to='/'>Model X</Link>
                <Link to='/'>Model Y</Link>
                <Link to='/'>Solar roof</Link>
                <Link to='/'>Solar Panels</Link>
            </div>
            <div className='header__right'>
                <Link to='/' className={isMenuOpen && 'header__linkk--hidden'}>Shop</Link>
                <Link to='/login' className={isMenuOpen && 'header__linkk--hidden'}>Account</Link>
                <div className="header__menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseIcon /> : <Link to='/'>Menu</Link>}
                </div>
            </div>

        </div>
    )
}

export default header
