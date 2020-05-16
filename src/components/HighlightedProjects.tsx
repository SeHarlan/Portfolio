import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

export default class HighlightedProjects extends Component {
  render() {
    return <div className="highlighted-projects">
      <header>
        <h1>Highlighted Projects</h1>
        <img src="/images/gameboy.gif" alt="gameboy" />
      </header>
      <h5>~ Sites hosted with Heroku may take a moment to wake up ~</h5>

      <ProjectCard title="Shadespeare" 
      site="https://shadespeare-insults.herokuapp.com" 
      github="https://github.com/Shakespeare-Insult-Bot" 
      image="/images/shadespeare.png" 
      tech="Markov Chain / Twilio / Regex / Jest / Supertest / React / Node / MongoDB / Mongoose / Heroku"
      body={`Using the markov-chains-text library, Shakespeare inspired insults were generated for the "Shadespeare" bot. With Twilio's calling and text to voice features you are able to send in Shadespeare to speak in a Zoom call. I lead the team in creating the chatbot, where we utilized regex to capture keywords and phrases so users can interact via text with Shadespeare and receive intelligent responses.`} 
      />
      
      <ProjectCard title="Alchimia"
      right={true}
      site="https://alchimia-by-the-meeps.github.io/alchimia/"
      github="https://github.com/Alchimia-by-the-meeps/alchimia"
      image="/images/alchimia.png"
      tech="Javascript / HTML / CSS / Local Storage"
      body="My very first group project, created in a one week sprint utilizing vanilla Javascript (along with HTML/CSS) and local storage to maintain state. I proposed using hashmaps and nested arrays as data structures. This allowed the app to keep track of and correctly render a series of rotate-able decorated tiles in a grid, with unique data points for each side. Using these structures in tandem we were able to validate tile placements and keep score based on the type of connections made."
      />

      <ProjectCard title="Mosaic"
      site="https://the-mosaic.herokuapp.com/"
      github="https://github.com/mosaic-api"
      image="/images/mosaic.png"
      tech="Color API / Web Audio API / Material UI / Jest / Supertest / Superagent / React / Node / SQL / Heroku"
      body="In this Full Stack App, I lead the team in using the Color API to create cohesive color palettes the user could choose from to create their own digital mosaic. Each colored tile is accompanied by a correlated musical note generated with Web Audio API. we utilized SQL as our persistance layer so the user can pull back saved mosaics for future modification and listen to the music generated from the mosaics they have built."
      />
    </div>
  }
}