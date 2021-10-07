import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageIcon from '@material-ui/icons/Language'
import './login.scss'
import ButtonPrimary from './ButtonPrimay.js'
import ButtonSecond from './ButtonSecond.js'
function Login() {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const signIn = (e)=>
    {
        e.preventDefault()
    }

    return (
    <div className='login'> 
        <div className='login__header'>
            <div className='login__logo'>
            <Link to='/' >
                    <img
                    src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
                    alt=''
                    >
                    </img>
            </Link>
            </div> 
            <div className='login__language'>
                <LanguageIcon /><span>en_Eu</span>
            </div>
        </div>
        <div className='login__infor'>
             <h1>Sign In</h1>
            <form className='login__form'>
                <label htmlFor='email'>Email Address</label>
                <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                 <input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonPrimary  name='Sign In' type='submit' onClick={signIn}/>
            </form>
            < div className='login__divider'>
                <hr/> <span>OR</span> <hr />
            </ div>
            <Link to='/signup' >
                <ButtonSecond  name='create account' />
            </Link>
            
        </div>  
    </div>    
    )
}

export default Login


