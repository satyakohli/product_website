import React, { useState } from 'react'

export default function Allow() {
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const handle=()=>{
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
    }
  return (
    <div>
        <form>
            <input type='email' placeholder='enter your mail id' onChange={(e)=>setemail(e.target.value)}/>
            <input type='password' placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}/>
            <button onClick={handle}>click me</button>
        </form>
    </div>
  )
}
