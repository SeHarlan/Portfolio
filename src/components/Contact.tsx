import React, { Component } from 'react'
import Nav from './Nav'
import ContactCard from './ContactCard'
import Waves from './Waves'

export default class Contact extends Component {
  render() {
    return (
      <section className="contact-page">
        <header className="contact-header">
          <Nav />
          <Waves />
          <ContactCard />
          <img className="grid" src="/images/grid.png" alt="grid" />
        </header>
      </section>
    )
  }
}