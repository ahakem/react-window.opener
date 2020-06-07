import React, { useState } from 'react'
import WindowOpener from 'react-window-opener'
export default function Home() {
  const [state, setstate] = useState('')
  const childResponse = (err, res) => {
    if (err) {
      console.log(res, 'err')
      setstate(res)
    }
    console.log(res, 'res')
    setstate(res)
  }
  return (
    <div style={{margin:"20px"}}>
      <h1>Welcome to my Demo</h1>
      <p>
        Here the value from the child window: 
        <b style={{ color: 'red' }}> {state}</b>{' '}
      </p>
      <WindowOpener url='#/login' bridge={childResponse}>
        <div style={{ color: '#fff', 
        background:'blueviolet',
        display:'inline-block',
         padding:'10px',
         borderRadius:'8px',
         cursor: 'pointer'
         }}>Click Me to open popup</div>
      </WindowOpener>
    </div>
  )
}
