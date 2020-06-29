import React, { Component } from 'react'
import Nav from './Nav'
import HighlightedProjects from './HighlightedProjects'
import ContactCard from './ContactCard'
import ProjectCard from './ProjectCard'
import waterBg from '../assets/water-bg.jpg'
import resty from '../assets/RESTy.png'

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