import React from 'react'
import "./Contact.css"
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (

<section className='contact'>
  
    
      <div className='contact-left'>
        <h2 className='all-head'>Contact <span>Me</span> </h2>
        <p><IoMdMail />
         <span className='xyz'> kiran.jena26022000@gmail.com</span> </p>
        <p><FaPhoneAlt /> <span className='xyz'>9040519109</span></p>
        <div className='contact-icons'>
          <a className='icon-an' href=""><FaInstagram /></a>
          <a  className='icon-an'href=""><FaTwitter /></a>
          <a  className='icon-an'href=""><FaFacebookSquare /></a>
          <a  className='icon-an'href=""><FaLinkedin /></a>
        </div> 
        
      </div>
      <div className='contact-right'>
        <form >
          <input type="text" name='Name' placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="Message" placeholder='Your Message'></textarea>
        <button type='submit' className='cv-link'>Submit</button>
        </form>
        </div>

</section>

  )
}

export default Contact






















