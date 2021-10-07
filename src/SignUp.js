import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.scss'
import LanguageIcon from '@material-ui/icons/Language'
import ButtonSecond from './ButtonSecond.js'
import ButtonPrimary from './ButtonPrimay.js'
import ButtonThird from './ButtonThird.js'
function SignUp() {
    return (
        <div className='Signup'>
            <div className='Signup__header'>
                <div className='Signup__logo'>
                <Link to='/'>
                    <img src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
                    alt=''
                    />
                </Link>
                </div>
                <div className='Signup__language'>
                    <LanguageIcon /><span>en_Eu</span>
                </div>
            </div>
            <div className='Signup__infor'>
                <h1>Sign In</h1>
            <form className='Signup__form'>
                <label htmlFor='fName'>Fisrt Name</label>
                <input
                id='fName'
                type='email'
                />
                <label htmlFor='password'>Last Name</label>
                 <input
                id='lName'
                type='text'
              
                />
                <label htmlFor='email'>Email Address</label>
                <input
                id='email'
                type='email'
                />
                <label htmlFor='password'>Password</label>
                 <input
                id='password'
                type='password'
                />
                <ButtonPrimary  name='Create Account' type='submit' />
                <ButtonThird    name='Cancel' type='submit' />
            </form>
            < div className='Signup__divider'>
                <hr/> <span>OR</span> <hr />
            </ div>
            <Link to='/login' >
                <ButtonSecond  name='Sign In' />
            </Link>
            </div>
    </div>
    )
}

export default SignUp
