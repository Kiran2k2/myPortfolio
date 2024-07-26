import React from 'react'
import { Project } from '../Data/Projects'
import "../Routes/Projects.css"
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className='project-section'>
     
      <div className='pro-head'>
      <h1> Projects</h1>

      </div>




      <div className='pro-part'>
        {Project.map(({id,title,tech,img,sub})=>{
  return ( 
     <div className='single-pro' key={id}>
      <img src={img}  />
      <h3> {title }</h3>
      <p>{sub}</p>
      <h4>{tech}</h4>
      <button className='visit'><FaExternalLinkAlt /></button>
     </div>
  )
        })
          
        }
      </div>
    </section>
  )
}

export default Projects