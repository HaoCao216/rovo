import './SignUp.css'
import React, {Component} from 'react'

import SignUp from '../../components/SignUp/SignUp'
import LoginFb from '../../components/LoginFb/LoginFb'

class SignUpPage extends Component {
  render() {
    return (
      <div className="login-section">
        <div className="col-md-6 login-section-left">
          <SignUp/>
          <LoginFb/>
          <div className="Rovoaccount">
            Log in to your Rovo account
          </div>
        </div>
        <div className="col-md-6 login-section-right">
          <div className='background-image'/>
        </div>
      </div>
    )
  }
}

export default SignUpPage