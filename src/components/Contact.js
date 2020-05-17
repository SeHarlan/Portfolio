import React, { Component } from 'react'
import Nav from './Nav'
import Waves from './Waves'
import ResumeModal from './ResumeModal'

export default function Contact {
  
  const scrollInto = useRef(null)
  useEffect(() => {
    scrollInto.current.scrollIntoView()
  })
    return (
      <section ref={scrollInto} className="contact-page">
        <Nav />
        <header className="contact-header">

          <div>
            <img src="/images/computor.gif" alt="computer" />
            <h1>Contact Information</h1>
          </div>
        </header>
          <section>
              <a className="linkedin" href="https://www.linkedin.com/in/scottharlan-pnw/" target="_blank" rel="noopener noreferrer">
                <h2>LinkedIn Profile</h2>
                <img src="/images/linkedin-icon.png" alt="linked in" />
              </a>

              <a className="github" href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer">
                <h2>GitHub Profile</h2>
                <img src="/images/github-icon.png" alt="github" />
              </a>

              <a className="email" href="mailto:seharlan@gmail.com" target="_blank" rel="noopener noreferrer">
                <h2>Send Me An Email</h2>
                <img src="/images/email-icon.png" alt="email" />
              </a>
              <ResumeModal page={true}/> 

          </section>
          
          <Waves />
          <img className="grid" src="/images/grid.png" alt="grid" />
      </section>
    )
  
}