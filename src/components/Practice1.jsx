import React from 'react'

export default function Practice1() {
  return (
    <div>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required /><br /><br />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required /><br /><br />

            <input type="submit" value="Submit" />
          </form>
    </div>
  )
}
