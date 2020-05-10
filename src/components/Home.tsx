import React, { Component } from 'react'
import Nav from './Nav'
import Waves from './Waves'
import ContactCard from './ContactCard'
import AboutCard from './AboutCard'
import HighlightedProjects from './HighlightedProjects'
import Arrows from './Arrows'
import EntryMessage from './EntryMessage'

export default class Home extends Component {
  state = {
    greeting: '',
    entryBool: true,
  }
  componentDidMount() {
    let time = new Date().getHours()
    // time += -10;
    let greeting = 'Hello '
    if (time > 4) greeting = 'Good morning ';
    if (time > 11) greeting = 'Good afternoon ';
    if (time > 16) greeting = 'Good evening ';
    this.setState({ greeting: greeting})
  }
  getTitleImg() {
    const { greeting } = this.state
    if (greeting === 'Hello, ') return "/images/scott-saturn.png";
    if (greeting === 'Good Evening, ') return "/images/scott-moon.png";
    return "/images/Scott-Harlan.png"
  }
  render() {
    const {greeting } = this.state
    return (
      <section>
        {greeting && <EntryMessage greeting={greeting} />}
        <header className="home-header">
          <Nav home={true}/>
          <Waves />
          <img className="scott-harlan" src={this.getTitleImg()} alt="Scott Harlan" />
          <p>"A Full Stack Software Engineer who thrives on building relationships with diverse teams and tackling complex challenges."</p>
          {/* <p>Still In Development</p> */}
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