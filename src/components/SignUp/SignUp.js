import React, {Component} from 'react'
import {FormGroup} from '@blueprintjs/core'
import SignUpBtn from '../commons/SignUpBtn/SignUpBtn'
import InputBox from '../commons/TextInput/Input'

const SignUp = (props) => {
  return (
    <div style={{width: '290px', paddingTop: '138px', margin: 'auto'}}>
      <div style={{width: '100%', marginBottom: '24px', fontSize: '2em'}}>
        for Partners
      </div>
      <div style={{width: '100%', marginBottom: '20px'}}>
        Sign up for a Rovo account
      </div>
      <FormGroup>
        <InputBox placeholder="Email"/>
        <InputBox placeholder="Password"/>
        <InputBox placeholder="Confirm password"/>
        <SignUpBtn text="Sign Up"/>
      </FormGroup>
      <div style={{width: '100%'}}>

      </div>
    </div>
  )
}

export default SignUp