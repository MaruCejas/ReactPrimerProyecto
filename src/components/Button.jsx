import React from 'react'

const Button =( color, cb , text) => {
    return (
        <button className={color} onClick={cb}>
        {text}
        </button>
    )
}

export default Button