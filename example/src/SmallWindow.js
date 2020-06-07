import React, {useState} from 'react'

export default function SmallWindow() {
  const [state, setstate] = useState("")
  const update = (evt) =>{
    setstate(evt.target.value)
    window.opener.onSuccess(state)
  }
    return (
      <center>
        <h1>
            Hello World
        </h1>
        <p>Type anything here to see it updated in the parent</p>
        <input 
          value={state}
          onChange={update}
        />
        <br/><br/>
        <button onClick={()=>{window.close()}}>Close Me</button>
        </center>
    )
}
