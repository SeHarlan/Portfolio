import React from 'react'
import { Link } from 'react-router-dom'
import {useScreenDimensions} from '../hooks/useScreenDimensions'
import vaporPalm from '../assets/vapor-palm.png'
import statue from '../assets/statue.png'
import gameboy from '../assets/gameboy.png'
import computor from '../assets/computor.png'

const Nav = ({home = false}: {home?: boolean}) => {

  const {width: screenWidth} = useScreenDimensions()

  const classNames = (home && screenWidth > 420 ) ? 'navigation navigation-home' : 'navigation'

  return (
    <div className={classNames}>
      <Link className="home" to='/'>
        <img src={vaporPalm} alt="home" />
        <h4>Home</h4>
      </Link>
      <Link className="about" to='/about'>
        <img src={statue} alt="about" />
        <h4>About</h4>
      </Link>
      <Link className="projects" to='/projects'>
        <img src={gameboy} alt="projects" />
        <h4>Projects</h4>
      </Link>
      <Link className="contact" to='/contact'>
        <img src={computor} alt="contact" />
        <h4>Contact</h4>
      </Link>
    </div>
  )
}

export default Nav