import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Login.css";
import Signup from "./Signup";
import Home from "./Home";

import { Link } from "react-router-dom";

function Login() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const username=localStorage.setItem('username', data);
    const password=localStorage.setItem('password', data);
  };

  
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email id</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input type="email" id="email" {...field} />}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input type="password" id="password" {...field} />
            )}
          />
        </div>
        <div className="submit">
          <Link to="/signup">
            <button className="sign_up" style={{backgroundColor:"white"}} type="submit">
              Signup
            </button>
          </Link>
          <Link to="/home1">
            <button className="sign_up" style={{backgroundColor:"white"}} type="submit">
              Login
            </button>
          </Link>

          {/* <button type="button">Login</button> */}
        </div>
      </form>
    </div>
  );
}

export default Login;

// import { Link } from "react-router-dom";
// import { useState } from "react"; // Import useState
// import { useForm, Controller } from "react-hook-form";

// export default function Login() {
//   const [apiData, setApiData] = useState(null); // State to store API response

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm([]);

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("your_api_endpoint_url", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         setApiData(responseData);
//         console.log(responseData);
//         // Handle the response data here, such as storing tokens or updating the UI.
//       } else {
//         console.error("Login failed:", response.statusText);
//         // Handle login error, display error messages, etc.
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       // Handle login error, display error messages, etc.
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="email">email id</label>
//           <Controller
//             name="email"
//             control={control}
//             render={({ field }) => (
//               <input type="email" id="email" {...field} />
//             )}
//           />
//           {/* {errors.username && <span>{errors.username.message}</span>} */}
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <Controller
//             name="password"
//             control={control}
//             render={({ field }) => (
//               <input type="password" id="password" {...field} />
//             )}
//           />
//           {errors.password && <span>{errors.password.message}</span>}
//         </div>
//         <div className="submit">
//           <Link to="/signup">
//             <button className="sign_up" type="button">
//               Signup
//             </button>
//           </Link>
//           <button className="sign_up" type="submit">
//             Login
//           </button>
//         </div>
//       </form>
//       {apiData && (
//         <div>
//           <h2>API Response Data:</h2>
//           <pre>{JSON.stringify(apiData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }
