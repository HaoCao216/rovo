import './Login.css'
import React, {Component} from 'react'

import SignUp from '../../components/SignUp/SignUp'

class Login extends Component {
  render() {
    return (
      <div className="login-section">
        <div className="col-md-6 login-section-left">
          <SignUp/>
        </div>
        <div className="col-md-6 login-section-right">
          <div className='background-image'/>
        </div>
      </div>
    )
  }
}

export default Login