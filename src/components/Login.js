import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
  const [ isSignInForm, setIsSignInForm ] = useState(true);

  const handleSignInToggle = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
      <div className='relative w-screen min-h-screen bg-black/50 flex justify-center items-center'>
        <div className='absolute w-full h-full -z-[1]'>
          <img className='w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg' />
        </div>
        <Header />
        <form className='w-[28vw] rounded top-28 py-10 px-14 flex flex-col bg-black/70'>
          <h1 className='text-white text-4xl font-bold tracking-tighter mb-8'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input className='p-3 rounded bg-transparent text-lg border border-zinc-500 mb-4 text-white outline-none focus:ring-1 focus:ring-white hover:ring-offset-1' type='text' placeholder='Full Name' />}
          <input className='p-3 rounded bg-transparent text-lg border border-zinc-500 mb-4 text-white outline-none focus:ring-1 focus:ring-white hover:ring-offset-1' type='email' placeholder='Email or mobile number' />
          <input className='p-3 rounded bg-transparent text-lg border border-zinc-500 mb-4 text-white outline-none focus:ring-1 focus:ring-white hover:ring-offset-1' type='password' placeholder='Password' />
          <button className='text-white bg-[#E50914] hover:bg-[#C51018] p-2 rounded font-semibold'>{isSignInForm ? "Sign In" : "Sign up" }</button>
          <h3 className=' text-zinc-400 font-medium my-4 text-center'>OR</h3>
          <button className='text-white bg-zinc-700/80 hover:bg-zinc-700/60 p-2 rounded font-semibold mb-4'>Use a sign-in code</button>
          <Link to="/" className='text-white hover:underline text-center mb-6'>Forgot password?</Link>
          <h3 className='text-white mb-4'>Remember me</h3>
          <h3 className='text-zinc-300 mb-5'>{isSignInForm ? "New to Netflix?" : "Already an user?"} <span onClick={handleSignInToggle} className='text-white font-semibold cursor-pointer hover:underline'>{isSignInForm ? "Sign up now" : "Sign in now"}</span>.</h3>
          <p className='text-zinc-400 text-sm leading-none'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-700 hover:underline'>Learn more.</span></p>
        </form>          
      </div>
  )
}

export default Login