import React from 'react'
import {Button} from '@blueprintjs/core'
import './Button.css'

const ButtonDefault = (props) => {
  let {text} = props
  return (
    <Button className='pt-fill pt-large btn-default' text={text || "Button"}/>
  )
}

export default ButtonDefault