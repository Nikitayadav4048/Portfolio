import React, { useState } from 'react'

function login() {
const [user , setUser] = useState("");
const [password , setPassword] = useState("") ; 
 

  const handleSubmit = (e) =>{

  }

  return (
    <div>
       <h1>Login</h1>
       <input type="text" 
           value={user}
           onChange={(e) => setUser(e.target.value)}
           placeholder='Username' 
       />
       {""}
       <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
       />
       <button  onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default login
