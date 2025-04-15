import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {

  // State variables for storing user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handler for form submission
  function submitHandler(e) {
    handleLogin(email, password); // Call the login handler with email and password
    e.preventDefault(); // Prevent page reload on form submit
    setEmail("");       // Clear email input
    setPassword("");    // Clear password input
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      {/* Login Form Container */}
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
          onSubmit={(e) => submitHandler(e)} 
          className='flex flex-col items-center justify-center'
        >
          {/* Email Input */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className='py-2 px-6 border-2 border-emerald-600 rounded-full font-medium text-lg outline-none bg-transparent placeholder:text-gray-400'
            type="email"
            placeholder='Enter Your Email'
          />

          {/* Password Input */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className='py-2 px-6 border-2 font-medium text-lg border-emerald-600 text-white rounded-full outline-none bg-transparent placeholder:text-gray-400 mt-4'
            type="password"
            placeholder='Enter Your Password'
          />

          {/* Submit Button */}
          <button
            className='bg-emerald-600 border-none rounded-full py-2 px-8 w-full font-semibold hover:bg-emerald-700 text-xl outline-none mt-5'
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
