import React, { useRef, useEffect } from 'react'
import Nav from './Nav'
import Waves from './Waves'
import ResumeModal from './ResumeModal'
import grid from '../assets/grid.png'
import linkedIn from '../assets/linkedin-icon.png'
import github from '../assets/github-icon.png'
import email from '../assets/email-icon.png'

export default function Contact() {
  
    return (
      <section className="contact-page">
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
                <img src={linkedIn} alt="linked in" />
              </a>

              <a className="github" href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer">
                <h2>GitHub Profile</h2>
                <img src={github} alt="github" />
              </a>

              <a className="email" href="mailto:seharlan@gmail.com" target="_blank" rel="noopener noreferrer">
                <h2>Send Me An Email</h2>
                <img src={email} alt="email" />
              </a>
          </section>
          
          <Waves />
          <img className="grid" src={grid} alt="grid" />
      </section>
    )
  
}