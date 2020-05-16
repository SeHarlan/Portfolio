import React, { Component } from 'react'
import Nav from './Nav'
import AboutCard from './AboutCard'
import ContactCard from './ContactCard'
import Waves from './Waves'
import Arrows from './Arrows'

export default class About extends Component {
  render() {
    return (
      <section className="about-page">
        <header className="about-header">
          <Nav />
          <Waves />
          <h1>About Me</h1>
          <AboutCard />
          <img className="grid" src="/images/grid.png" alt="grid" />
          <Arrows />
        </header>
        <article>
          <h2>Tech Skills and Tools</h2>
          <p><h3>Languages: </h3> JavaScript - HTML - CSS - TypeScript</p>
          <p><h3>Front-End: </h3> React - Redux - useContext - Sass</p>
          <p><h3>Back-End: </h3> Node.js/Express - REST APIs - Mongoose - PostgreSQL</p>
          <p><h3>Databases: </h3> SQL - MongoDB</p>
          <p><h3>Methods: </h3> TDD - Mobile First Design - Pair Programing - Agile</p>
          <p><h3>Testing: </h3> Jest - Enzyme - Supertest - QUnit - Travis CI - Github CI</p>
          <p><h3>Tools: </h3> Git/Github - Slack - VSCode - Heroku - Netlify - Compass - Postman
          </p>
        </article>
        <ContactCard />
      </section >
    )
  }
}