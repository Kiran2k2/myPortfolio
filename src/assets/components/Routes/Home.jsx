import React from 'react'
import "./Home.css"
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import resume from '../../kirancv00.pdf'
import img from '../../../assets/round.jpg'


function Home() {
  return (

<>
{/* <div className='home-total'>
<div className='middle-content'>
            <h3 >Hello I'm</h3>
            <h1 > Kiran Jena</h1>
            <h4 > Mern Stack developer</h4>
           <div className='all-home-icon'>
           <a href=""><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaFacebookSquare /></a>
          <a href=""><FaLinkedin /></a>
          
           </div>
            <a href={resume} className='btn-home' download="Kiran CV">Download CV</a>

          </div> */}
          {/* <div className='image-part'>
            <img src={img} alt="" />
          </div> */}

{/* </div> */}

<section className='section-home'>
  <div className='section-container '>
    <h3>HELLO I'm</h3>
    <h1>Kiran Jena </h1>
    <h3>  <span>Mern Stack Developer</span></h3>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate, quidem architecto <br /> Lorem ipsum dolor sit amet.</p>
    <div className='social-media'>
    <a href=""><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaFacebookSquare /></a>
          <a href=""><FaLinkedin/></a>
    </div>
    <a href={resume} className='btn-home' download="Kiran CV">Download CV</a>

 
  </div>
   <div className='image-part'>
            <img src={img} alt="" />
          </div> 
</section>













<About/>
<Skills/>
<Projects/>
<Contact/>

</>



  )
}

export default Home