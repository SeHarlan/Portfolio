import React, { Component } from 'react'
import Nav from './Nav'

export default class Contact extends Component {
  render() {
    return (
      <section>
        <Nav />
        <h1>Contact</h1>
        <h3>Wanna Hire Me?</h3>
        <a href="mailto:seharlan@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://www.linkedin.com/in/scottharlan-pnw/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer">GitHub</a>
      </section>
    )
  }
}