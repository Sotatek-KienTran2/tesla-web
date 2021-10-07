import React from 'react'
import './ButtonPrimary.scss'
function ButtonPrimay({name, type , onClick}) {
    return (
        <button className='buttonPrimary' onClick={onClick}>
            {name}
        </button>
    )
}

export default ButtonPrimay
