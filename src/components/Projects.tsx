import React, { Component } from 'react'
import Nav from './Nav'
import HighlightedProjects from './HighlightedProjects'
import ContactCard from './ContactCard'
import ProjectCard from './ProjectCard'

export default class Projects extends Component {
  render() {
    return (
      <section className="project-page">
        <Nav />
        <img className="water-bg" src="/images/water-bg.jpg" alt="water background" />
        <HighlightedProjects />
        <ContactCard />

        <div className="highlighted-projects">
          <header >
            <h1 className="more-projects">More Projects</h1>
          </header>
          <ProjectCard title="Data Structures..."
          github="https://github.com/SeHarlan/data-structures-and-algorithms"
          tech="Javascript"
          body="A series of whiteboard challenges including Linked Lists, Binary Trees, and Stacks and Queues (see branches)"
          />
          <ProjectCard title="Unripe-Banana"
          right={true}
          github="https://github.com/SeHarlan/unripe-banana"
          tech="Node / Express / Jest / Supertest / Mongoose / MongoDB"
          body="A Rotten Tomato clone (back-end only) utilizing Express/Node with MongoDB aggregations and Mongoose's virtuals and static methods."
          />
        </div>

      </section>
    )
  }
}