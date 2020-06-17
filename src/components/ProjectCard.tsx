import React from 'react'
import { useScreenDimensions } from '../hooks/useScreenDimensions'
import jsIcon from '../assets/js-icon.png'

const ProjectCard = ({right = false, title, site, github, image = jsIcon, tech, body}: {right?: boolean, title: string, site?: string, github: string, image?: string, tech: string, body: string}) => {

  const {width} = useScreenDimensions()
  const className: string = (right ? "project-div-right" : "project-div")

  
  // "right" boolean is used to determine which side the image is placed
  return (
  <div className={className}>
    {right && (<article>
        <h4>{tech}</h4>
        <p>{body}</p>
      </article>)}
    <section>
      <div>
        <h3>{title}</h3>
          {site && (<a href={site} target="_blank" rel="noopener noreferrer">Site</a>)}
          <a href={github} target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img src={image} alt={title} />
      </section>
      {!right && (<article>
        <h4>{tech}</h4>
        <p>{body}</p>
      </article>)}
      {width < 420 && (<aside>
        <h4>{tech}</h4>
        <p>{body}</p>
      </aside>)}
  </div>
)}
export default ProjectCard