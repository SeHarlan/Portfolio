import React, { Component } from 'react'
import Nav from './Nav'
import HighlightedProjects from './HighlightedProjects'
import ContactCard from './ContactCard'
import ProjectCard from './ProjectCard'
import waterBg from '../assets/water-bg.jpg'
import resty from '../assets/RESTy.png'
import mosaic from '../assets/mosaic.png'
import alchimia from '../assets/alchimia.png'

export default class Projects extends Component {
  render() {
    return (
      <section className="project-page">
        <Nav />
        <img className="water-bg" src={waterBg} alt="water background" />
        <HighlightedProjects />
        <ContactCard />

        <div className="highlighted-projects">
          <header >
            <h1 className="more-projects">More Projects</h1>
          </header>
          <ProjectCard title="Mosaic"
            site="https://the-mosaic.herokuapp.com/"
            github="https://github.com/mosaic-api"
            image={mosaic}
            tech="Color API / Web Audio API / Material-UI / Jest / Supertest / Superagent / React / Node / SQL / Heroku"
            body="In this Full Stack App, I lead the team in using the Color API to create cohesive color palettes the user could choose from to create their own digital mosaic. Each colored tile is accompanied by a correlated musical note generated with Web Audio API. we utilized SQL as our persistence layer so the user can pull back saved mosaics for future modification and listen to the music generated from the mosaics they have built."
          />
          <ProjectCard title="Alchimia"
            right={true}
            site="https://alchimia-by-the-meeps.github.io/alchimia/"
            github="https://github.com/Alchimia-by-the-meeps/alchimia"
            image={alchimia}
            tech="Javascript / HTML / CSS / Local Storage"
            body="My very first group project, created in a one week sprint utilizing vanilla Javascript (along with HTML/CSS) and local storage to maintain state. I proposed using hashmaps and nested arrays as data structures. This allowed the app to keep track of and correctly render a series of rotate-able decorated tiles in a grid, with unique data points for each side. Using these structures in tandem we were able to validate tile placements and keep score based on the type of connections made."
          />
          <ProjectCard title="REST Client"
            image={resty}
            github="https://github.com/SeHarlan/resty-provider"
            tech="React / PostCSS"
            body="REST Client (Postman clone), built in a solo two day sprint."
          />

          <ProjectCard title="Data Structures..."
            right={true}
            github="https://github.com/SeHarlan/data-structures-and-algorithms"
            tech="Javascript"
            body="A select series of whiteboard challenges I've completed including Linked Lists, Binary Trees, and Stacks and Queues (see branches)"
          />
          <ProjectCard title="Unripe-Banana"
            github="https://github.com/SeHarlan/unripe-banana"
            tech="Node / Express / Jest / Supertest / Mongoose / MongoDB"
            body="A Rotten Tomato clone (back-end only) utilizing Express/Node with MongoDB aggregations and Mongoose's virtuals and static methods."
          />
        </div>

      </section>
    )
  }
}