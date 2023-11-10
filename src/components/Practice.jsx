import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';


function Login() {

  const[action,setaction]=useState("log in");
  const { control, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>{action}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="email"
                {...field}
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                type="password"
                id="password"
                {...field}
              />
            )}
          />
        </div>
        <div>
        {action==="login"?<div></div>:<div>
          <label htmlFor="pass">Pass</label>
          <Controller
            name="pass"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="pass"
                {...field}
              />
            )}
          />
        </div>}
        </div>
        {/* <div>
          <label htmlFor="pass">Pass</label>
          <Controller
            name="pass"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="pass"
                {...field}
              />
            )}
          />
        </div> */}
        <div>
          <button className={action==="Login"?" submit grey":"submit"} type="submit" onClick={()=>setaction("login")}>login</button>
          <button  className={action==="Signup"?" submit grey":"submit"} type="button" onClick={()=>setaction("sign up")}>signup</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
