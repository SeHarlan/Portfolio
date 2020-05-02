import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div className="navigation">
        <Link className="home" to='/'>
          <img src="/images/vapor-palm.png" alt="home" />
          <h4>Home</h4>
        </Link>
        <Link className="about" to='/about'>
          <img src="/images/statue.png" alt="about" />
          <h4>About</h4>
        </Link>
        <Link className="projects" to='/projects'>
          <img src="/images/gameboy.png" alt="projects" />
          <h4>Projects</h4>
        </Link>
        <Link className="contact" to='/contact'>
          <img src="/images/computor.png" alt="contact" />
          <h4>Contact</h4>
        </Link>
      </div>
    )
  }
}