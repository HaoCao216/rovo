import './Contact.css'
import React, {Component} from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="login-section">
        <div className="col-md-6 login-section-left contact-section-left">
            <div className="contact">
                <img src="/assets/image/done.svg"/>
                <div className="contact-title1">Awesome. We’ll contact you shortly.</div>
                <div className="contact-title2">Look out for our email in your inbox and we’ll guide you through your business account set up process.</div>
            </div>
        </div>
        <div className="col-md-6 login-section-right">
          <div className='background-image'/>
        </div>
      </div>
    )
  }
}

export default Contact