import React, { Component } from 'react'
import Nav from './Nav'
import HighlightedProjects from './HighlightedProjects'
import ContactCard from './ContactCard'

export default class Projects extends Component {
  render() {
    return (
      <section>
        <img className="water-bg" src="/images/water-bg.jpg" alt="water background" />
        <Nav />
        <div className="spacer"></div>
        <HighlightedProjects />
        <ContactCard />

        <h2>More Projects</h2>
        <div>
          <h3>Data Structures and Algorithms</h3>
          <a href="https://github.com/SeHarlan/data-structures-and-algorithms" target="_blank" rel="noopener noreferrer">Github</a>
          <p>A series of whiteboard challenges including Linked Lists, Binary Trees, and Stacks and Queues (see branches)</p>
        </div>
        <div>
          <h3>Unripe-Banana</h3>
          <a href="https://github.com/SeHarlan/unripe-banana" target="_blank" rel="noopener noreferrer">Github</a>
          <p>A Rotten Tomato back-end clone utilizing Express/Node, Jest, SuperTest, Mongoose, and MongoDB with aggregations and other static methods.</p>
        </div>
      </section>
    )
  }
}