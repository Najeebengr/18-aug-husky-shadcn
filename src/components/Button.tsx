'use client'
import React from 'react'

function Button() {
  return (
    <button className='bg-green-500 p-2 rounded-md' onClick={()=>{
      alert("I am button")
    }}>
      Click Me
    </button>
  )
}

export default Button
