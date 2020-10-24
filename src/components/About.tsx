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
          <p>React / JavaScript / TypeScript / Node Express / Html / CSS / Sass / D3 / GraphQL REST APIs / Next.js / Redux / Socket.io Mongoose / MongoDB / PostgreSQL / SQL SuperTest / Jest</p>
        </article>
        <ContactCard />
      </section >
    )
  }
}