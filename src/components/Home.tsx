import React, { Component } from 'react'
import Nav from './Nav'
import Waves from './Waves'
import ContactCard from './ContactCard'
import AboutCard from './AboutCard'
import HighlightedProjects from './HighlightedProjects'
import Arrows from './Arrows'
import EntryMessage from './EntryMessage'
import Map from './Map'

import scottSunLogo from '../assets/Scott-Harlan.png'
import scottMoonLogo from '../assets/scott-moon.png'
import scottSaturnLogo from '../assets/scott-saturn.png'
import grid from '../assets/grid.png'
import waterBG from '../assets/water-bg.jpg'

export default class Home extends Component {
  state = {
    greeting: '',
    entryBool: true,
  }
  componentDidMount() {
    let time = new Date().getHours()
    // time += -16;
    let greeting = 'Hello '
    if (time > 4) greeting = 'Good morning ';
    if (time > 11) greeting = 'Good afternoon ';
    if (time > 16) greeting = 'Good evening ';
    this.setState({ greeting: greeting})
  }
  getTitleImg() {
    const { greeting } = this.state
    if (greeting === 'Hello ') return scottSaturnLogo;
    if (greeting === 'Good evening ') return scottMoonLogo;
    return scottSunLogo
  }
  render() {
    const {greeting } = this.state
    return (
      <section>
        {greeting && <EntryMessage greeting={greeting} />}
        <header className="home-header">
          <Nav home={true}/>
          <Waves />
          {/* <img className="scott-harlan" src={this.getTitleImg()} alt="Scott Harlan" /> */}
          <Map />
          <p>"A Full Stack Software Engineer who thrives on building relationships with diverse teams and tackling complex challenges."</p>
          {/* <p>Still In Development</p> */}
          <img className="grid" src={grid} alt="grid" />
          <Arrows />
        </header>

        <section>
          <img className="water-bg" src={waterBG} alt="water background" />

          <AboutCard />

          <HighlightedProjects />

          <ContactCard />

        </section>
      </section>
    )
  }
}