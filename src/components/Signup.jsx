import React from "react";
import { useForm, Controller } from "react-hook-form";
import './signup.css'

function Signup() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="sign_page">
      <h2>sign up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstname">Firstname:</label>
          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <input type="text" id="firstname" {...field} />
            )}
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <input type="text" id="lastname" {...field} />
            )}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <select id="gender" {...field}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            )}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input type="text" id="email" {...field} />}
          />
        </div>
        <div>
          <label htmlFor="mobile no">mobile no:</label>
          <Controller
            name="mobile no"
            control={control}
            render={({ field }) => (
              <input type="number" id="mobile no" {...field} />
            )}
          />
        </div>
        <div>
          <label htmlFor="Address">Address:</label>
          <Controller
            name="Address"
            control={control}
            render={({ field }) => (
              <input type="text" id="Address" {...field} />
            )}
          />
        </div>
        <div>
          <button className="submit_it" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
