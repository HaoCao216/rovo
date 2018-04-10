import React, {Component} from 'react'
import {FormGroup} from '@blueprintjs/core'
import SignUpBtn from '../commons/SignUpBtn/SignUpBtn'
import InputBox from '../commons/TextInput/Input'
import logo from '../../assets/image/logo.png'

const SignUp = (props) => {
  return (
    <div style={{width: '290px', paddingTop: '100px', margin: 'auto'}}>
      <div style={{width: '100%', marginBottom: '24px', fontSize: '2em'}}>
        <span><img src={logo} width="100"/></span>
        <span>for Partners</span>
      </div>
      <div style={{width: '100%', marginBottom: '20px'}}>
        Sign up for a Rovo account
      </div>
      <FormGroup>
        <InputBox placeholder="Email"/>
        <InputBox placeholder="Password"/>
        <SignUpBtn text="Sign In"/>
      </FormGroup>
    </div>
  )
}

export default SignUp