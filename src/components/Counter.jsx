import Button from './Button'
import React, { useState } from 'react'

const Counter = ({ count , sumar , restar }) => {
  
    return (
    <div>
        <p>Valor: {count}</p>
        <button onClick={() => sumar}>Sumar</button>
        <button onClick={() => restar}>Restar</button>
    </div>
  )
}

export default Counter