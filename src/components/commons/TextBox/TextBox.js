import React from 'react'
import './TextBox.css'

const TextBox = (props) => {
  let {textbox} = props
  return (
    <div className='TextBox'>
        <span>{textbox}</span>
    </div>
  )
}

export default TextBox