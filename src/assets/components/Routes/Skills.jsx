import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { SiExpress } from "react-icons/si";

import"../Routes/Skills.css"

function Skills() {
  return (
    <>
      <div className='main-tech'>
        <h2>Skills</h2>
        <div className='tech-sec'>
          <div>
       <p className='html'>     <FaHtml5 /></p>
            <h5>HTML</h5>
          </div>
          <div>
         <p className='css'> <IoLogoCss3 /></p>

            <h5>CSS</h5>
          </div>
          <div>
<p className='js'><SiJavascript /></p>
            <h5>javascript</h5>
          </div>
          <div>
      <p className='react'>    <GrReactjs /></p>
            <h5>ReactJS</h5>
          </div>
          <div>
          <p className='mongo'><DiMongodb /></p>
            <h5>MongoDB</h5>
          </div>
          <div>
         <p className='node'> <FaNodeJs /></p>
          <h5>NodeJS</h5>

          </div>
          <div>
         <p className='sql'> <PiFileSqlFill /></p>
          <h5>SQL</h5>

          </div>
          <div>
            <p className='exp'><SiExpress /></p>
            <h5>Express</h5>
          </div>


        </div>
      </div>
    </>
  )
}

export default Skills