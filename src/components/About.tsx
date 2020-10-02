import React, { Component } from 'react'
import Nav from './Nav'
import AboutCard from './AboutCard'
import ContactCard from './ContactCard'
import Waves from './Waves'
import Arrows from './Arrows'
import grid from '../assets/grid.png'

export default class About extends Component {
  render() {
    return (
      <section className="about-page">
        <header className="about-header">
          <Nav />
          <Waves />
          <h1>About Me</h1>
          <AboutCard />
          <img className="grid" src={grid} alt="grid" />
          <Arrows />
        </header>
        <article>
          <h2>Tech Skills</h2>
          <p><h3>Languages: </h3> JavaScript - HTML - CSS - TypeScript</p>
          <p><h3>Front-End: </h3> React - Redux - Next.js - Sass - D3</p>
          <p><h3>Back-End: </h3> Node.js/Express - REST APIs - Mongoose - PostgreSQL</p>
          <p><h3>Full Stack: </h3> Socket.io - GraphQL</p>
          <p><h3>Databases: </h3> SQL - MongoDB</p>
          <p><h3>Testing: </h3> Jest - Enzyme - Supertest</p>
        </article>
        <ContactCard />
      </section >
    )
  }
}