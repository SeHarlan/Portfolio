import React, { Component } from 'react'
import Nav from './Nav'
import AboutCard from './AboutCard'
import ContactCard from './ContactCard'
import Waves from './Waves'

export default class About extends Component {
  render() {
    return (
      <section className="about-page">
        <header className="about-header">
          <Nav />
          <Waves />
          <AboutCard />
          <img className="grid" src="/images/grid.png" alt="grid" />
        </header>

        <h3>Tech Skills and Tools</h3>
        <p>
          Languages:
          - JavaScript
          - HTML
          - CSS
          - TypeScript

          Front-End:
          - React
          - Redux
          - Sass

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
        <ContactCard />
      </section>
    )
  }
}