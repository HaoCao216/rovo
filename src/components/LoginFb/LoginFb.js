import React, {Component} from 'react'
import LoginFbBtn from '../commons/LoginFbBtn/LoginFbBtn'
import './LoginFb.css'

const LoginFb = (props) => {
  return (
    <div style={{width: '290px', margin: 'auto'}}>
        <div className="forgot-pass">
            Forgot your password?
        </div>
        <div className="or-line">OR</div>
        <LoginFbBtn text="Log in with Facebook"/>
    </div>
  )
}

export default LoginFb