import React, { Component } from 'react'
import Nav from './Nav'
import Waves from './Waves'
import ContactCard from './ContactCard'
import AboutCard from './AboutCard'
import HighlightedProjects from './HighlightedProjects'
import Arrows from './Arrows'

export default class Home extends Component {
  state = {
    greeting: 'Hello, '
  }
  componentDidMount() {
    let time = new Date().getHours()
    time += 0
    let greeting = 'Hello, '
    if (time > 4) greeting = 'Good Morning ';
    if (time > 11) greeting = 'Good Afternoon, ';
    if (time > 16) greeting = 'Good Evening, ';
    this.setState({ greeting: greeting })
  }
  getTitleImg() {
    const { greeting } = this.state
    if (greeting === 'Hello, ') return "/images/scott-saturn.png";
    if (greeting === 'Good Evening, ') return "/images/scott-moon.png";
    return "/images/Scott-Harlan.png"
  }
  render() {
    return (
      <section>
        <header className="home-header">
          <Nav />
          <Waves />
          <img className="scott-harlan" src={this.getTitleImg()} alt="Scott Harlan" />
          <p>"A Full Stack Software Engineer who thrives on building relationships with diverse teams and tackling complex challenges."</p>
          <img className="grid" src="/images/grid.png" alt="grid" />
          <Arrows />
        </header>

        <section>
          <img className="water-bg" src="/images/water-bg.jpg" alt="water background" />

          <AboutCard />

          <HighlightedProjects />

          <ContactCard />

        </section>
      </section>
    )
  }
}