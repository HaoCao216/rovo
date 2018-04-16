import React from 'react'
import {Button} from '@blueprintjs/core'
import './LoginFbBtn.css'

const LoginFbBtn = (props) => {
  let {text} = props
  return (
    <Button className='pt-fill pt-large btn-login-fb' text={text || "Button"}/>
  )
}

export default LoginFbBtn