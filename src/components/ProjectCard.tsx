import React from 'react'

const ProjectCard = ({right = false, title, site, github, image, tech, body}: {right?: boolean, title: string, site: string, github: string, image: string, tech: string, body: string}) => {

  const className: string = (right ? "project-div-right" : "project-div")

  return (
  <div className={className}>
    <section>
      <div>
        <h3>{title}</h3>
          {site && (<a href={site} target="_blank" rel="noopener noreferrer">Site</a>)}
          <a href={github} target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img src={image} alt={title} />
      </section>
      <article>
        <h4>{tech}</h4>
        <p>{body}</p>

      </article>
    </div>
)}
export default ProjectCard