import '../SignUpContainer/SignUp.css'
import React, {Component} from 'react'

import Login from '../../components/Login/Login'
import LoginFb from '../../components/LoginFb/LoginFb'

class LoginPage extends Component {
  render() {
    return (
      <div className="login-section">
        <div className="col-md-6 login-section-left">
          <Login/>
          <LoginFb/>
          <div className="Rovoaccount">
            Sign up for a Rovo account
          </div>
        </div>
        <div className="col-md-6 login-section-right">
          <div className='background-image'/>
        </div>
      </div>
    )
  }
}

export default LoginPage