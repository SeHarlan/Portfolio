import React, { Component } from 'react'
import Nav from './Nav'

export default class About extends Component {
  render() {
    return (
      <section>
        <Nav />
        <h1>Hello I'm Scott Harlan</h1>
        <p>Full Stack Software Engineer who thrives on building relationships with diverse teams and tackling complex challenges. A background in customer service gives me a unique focus on a client's perspective and overall satisfaction. I highly value companies that support direct communication, creativity and professional development. As a musician and critical thinker, nothing excites me more than discovering unique ideas that solve root problems and uplift others.</p>
        <p>In my personal life I love nothing more than expressing myself through music. This includes playing in bands like Seance Crasher and producing my own songs and compositions.</p>
        <h3>Tech Skills and Tools</h3>
        <p>
          Languages:
          - JavaScript
          - HTML
          - CSS

          Front-End:
          - React
          - Redux

          Back-End:
          - Node.js/Express
          - REST APIs
          - Mongoose
          - PostgreSQL

          Databases:
          - SQL
          - MongoDB

          Methods:
          - TDD
          - Mobile First Design
          - Pair Programing
          - Agile

          Testing:
          - Jest
          - Supertest
          - QUnit
          - Travis CI
          - Github CI

          Tools:
          - Git/Github
          - Slack
          - VSCode
          - Heroku
          - Netlify
          - Compass
          - Postman
</p>
        <h3>Wanna Hire Me?</h3>
        <a href="mailto:seharlan@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://www.linkedin.com/in/scottharlan-pnw/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer">GitHub</a>
      </section>
    )
  }
}