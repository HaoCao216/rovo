import React from 'react'
import './Input.css'

const InputBox = (props) => {
  let {placeholder} = props
  return (
    <input className="pt-input pt-large pt-fill input-margin-btm" type="text" placeholder={placeholder || ""} dir="auto"/>
  )
}

export default InputBox