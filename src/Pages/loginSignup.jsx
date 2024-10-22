import React from 'react'
import './CSS/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Your Email'/>
          <input type='Password' placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p className='logisignup-login'>Already have an account <span>Login here</span></p>
<div className='loginsignup-agree'>
  <input type='checkbox' name='' id=''/>
  <span>By continuing, i agree the terms of use & privacy policy.</span>
</div>
      </div>
      
    </div>
  )
}

export default LoginSignup;
