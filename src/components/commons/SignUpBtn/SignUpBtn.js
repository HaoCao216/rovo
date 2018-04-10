import React from 'react'
import {Button} from '@blueprintjs/core'
import './SignUpBtn.css'

const SignUpBtn = (props) => {
  let {text} = props
  return (
    <Button className='pt-fill pt-large btn-sign-up' text={text || "Button"}/>
  )
}

export default SignUpBtn