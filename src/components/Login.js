import React, { useRef, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { checkValidation } from '../utils/validate';

const Login = () => {
  const [ isSignInForm, setIsSignInForm ] = useState(true);
  const [ error, setError ] = useState(null);

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    // Validate the form data
    const message = checkValidation(email.current.value, password.current.value);
    setError(message);
    
    // Sign up
  }

  const handleSignUp = () => {
    // Validate the form data
    const message = checkValidation(fullname.current.value, email.current.value, password.current.value);
    setError(message);
    
    // Sign up
  }

  const handleSignInToggle = () => {
    setIsSignInForm(!isSignInForm);
    setError(null);
  }

  return (
      <div className='relative min-h-screen flex flex-col justify-center items-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg")]'>
        <div className='absolute w-full h-full bg-black/50'></div>
        <Header />
        <form onSubmit={(e) => e.preventDefault()} className='relative w-96 rounded p-10 flex flex-col bg-black/70 mt-28'>
          <h1 className='text-white text-4xl font-bold tracking-tighter mb-8'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input ref={fullname} className='p-3 rounded bg-transparent text-lg border border-zinc-500 mb-4 text-white outline-none focus:ring-1 focus:ring-white hover:ring-offset-1' type='text' placeholder='Full Name' />}
          <input ref={email} className='p-3 rounded bg-transparent text-lg border border-zinc-500 mb-4 text-white outline-none focus:ring-1 focus:ring-white hover:ring-offset-1' type='email' placeholder='Email or mobile number' />
          <input ref={password} className='p-3 rounded bg-transparent text-lg border border-zinc-500 mb-4 text-white outline-none focus:ring-1 focus:ring-white hover:ring-offset-1' type='password' placeholder='Password' />
          <h1 className='text-red-500 mb-3 font-medium'>{error}</h1>
          <button onClick={handleSignIn} className='text-white bg-[#E50914] hover:bg-[#C51018] p-2 rounded font-semibold'>{isSignInForm ? "Sign In" : "Sign up" }</button>
          <h3 className=' text-zinc-400 font-medium my-4 text-center'>OR</h3>
          <button className='text-white bg-zinc-700/80 hover:bg-zinc-700/60 p-2 rounded font-semibold mb-4'>Use a sign-in code</button>
          <Link to="/" className='text-white hover:underline text-center mb-6'>Forgot password?</Link>
          <h3 className='text-white mb-4'>Remember me</h3>
          <h3 className='text-zinc-300 mb-5'>{isSignInForm ? "New to Netflix?" : "Already an user?"} <span onClick={handleSignInToggle} className='text-white font-semibold cursor-pointer hover:underline'>{isSignInForm ? "Sign up now" : "Sign in now"}</span>.</h3>
          <p className='text-zinc-400 text-sm leading-none'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-700 hover:underline'>Learn more.</span></p>
        </form> 
        <div className='h-96 w-full bg-black'>
        </div>         
      </div>
  )
}

export default Login