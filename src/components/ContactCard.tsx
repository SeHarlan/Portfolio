import React, { Component } from 'react'
import ResumeModal from './ResumeModal'

export default class ContactCard extends Component {
  render() {
    return <div className="contact-card">
      <header>
        <h1>Wanna Hire Me?</h1>
        <img src="/images/computor.gif" alt="computer" />
      </header>
      <section>
        <a className="linkedin" href="https://www.linkedin.com/in/scottharlan-pnw/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin-icon.png" alt="linked in" /></a>
        <a className="github" href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer"><img src="/images/github-icon.png" alt="github" /></a>
        <a className="email" href="mailto:seharlan@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/images/email-icon.png" alt="email" /></a>
        <ResumeModal />
      </section>
    </div>
  }
}