import React, { Component } from 'react'
import Nav from './Nav'
import Waves from './Waves'
import ContactCard from './ContactCard'
import AboutCard from './AboutCard'
import HighlightedProjects from './HighlightedProjects'
import Arrows from './Arrows'
// import EntryMessage from './EntryMessage'
// import Map from './Map'

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
    // time += -16; //for dev testing
    let greeting = 'Hello ' //from 12am to 3:59am
    if (time > 4) greeting = 'Good morning '; //from 4am to 10:59am
    if (time > 11) greeting = 'Good afternoon '; //from 11am to 4:59pm
    if (time > 16) greeting = 'Good evening '; //from 5pm to 12am
    this.setState({ greeting: greeting })
  }
  getTitleImg() {
    const { greeting } = this.state
    if (greeting === 'Hello ') return scottSaturnLogo;//from 12am to 3:59am
    if (greeting === 'Good evening ') return scottMoonLogo;//from 5pm to 12am
    return scottSunLogo //all other times
  }
  render() {
    return (
      <section>
        {/* only displays the first time a user is on the home page */}
        <header className="home-header">
          <Nav home={true} />
          <Waves />
          <img className="scott-harlan" src={this.getTitleImg()} alt="Scott Harlan" />
          {/* currently expirimenting with d3 Map/globe as a display piece */}
          {/* <Map /> */}
          <p>"Simply put, I love to code. I love to push my intellectual and creative abilities as far as they will go and then push further."</p>
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