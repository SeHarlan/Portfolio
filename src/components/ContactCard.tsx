import React, { Component } from 'react'
import linkedIn from '../assets/linkedin-icon.png'
import github from '../assets/github-icon.png'
import email from '../assets/email-icon.png'

export default class ContactCard extends Component {
  render() {
    return <div className="contact-card">
      <header>
        <h1>Wanna Hire Me?</h1>
        <img src="/images/computor.gif" alt="computer" />
      </header>
      <section>
        <a className="linkedin" href="https://www.linkedin.com/in/scottharlan-pnw/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linked in" /></a>
        <a className="github" href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
        <a className="email" href="mailto:seharlan@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="email" /></a>
      </section>
    </div>
  }
}