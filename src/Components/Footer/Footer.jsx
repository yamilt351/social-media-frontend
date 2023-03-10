import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer__container'>
        <h3 className='footer__title'>Social Medica App</h3>
        <div className="footer__icons">
            <p className="icon">Legal information</p>
            <p className="icon">Terms and conditions</p>
        </div>
    </section>
  )
}

export default Footer