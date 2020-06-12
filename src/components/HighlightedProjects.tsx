import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import goingViral from '../assets/going-viral.png'
import shadespeare from '../assets/shadespeare.png'
import alchimia from '../assets/alchimia.png'
import mosaic from '../assets/mosaic.png'

export default class HighlightedProjects extends Component {
  render() {
    return <div className="highlighted-projects">
      <header>
        <h1>Highlighted Projects</h1>
        <img src="/images/gameboy.gif" alt="gameboy" />
      </header>
      <h5>~ Sites hosted with Heroku may take a moment to wake up ~</h5>

      <ProjectCard title="Going Viral" 
      site="https://goingviral.netlify.app" 
      github="https://github.com/Going-Viral" 
      image={goingViral}
      tech="D3 / Material-UI / Jest / Supertest / Redux / React / Node / MongoDB / Mongoose / Heroku / Netlify"
      body={`In a ten day sprint my team and I learned D3 from scratch and fused that with our knowledge of React, Redux and MongoDB to create "Going Viral, Pandemic-Related Mobility Metrics". Our data sources included Global Mobility Reports from Google and Global COVID Case data sourced from Bing. My personal focus was munging geoJSON with the Global Mobility Reports and utilizing D3 alongside React to create the interactive choropleth globe. I also guided the architecture of our global state and contributed to the comparison line graphs for mobility metrics between different countries and subregions, and the stacked bar chart for viewing total and daily COVID case numbers.`} 
      />

      <ProjectCard title="Shadespeare" 
      right={true}
      site="https://shadespeare-insults.herokuapp.com" 
      github="https://github.com/Shakespeare-Insult-Bot" 
      image={shadespeare}
      tech="Markov Chain / Twilio / Regex / Jest / Supertest / React / Node / MongoDB / Mongoose / Heroku"
      body={`Using the markov-chains-text library, Shakespeare inspired insults were generated for the "Shadespeare" bot. With Twilio's calling and text to voice features you are able to send in Shadespeare to speak in a Zoom call. I lead the team in creating the chatbot, where we utilized regex to capture keywords and phrases so users can interact via text with Shadespeare and receive intelligent responses.`} 
      />
      
      <ProjectCard title="Alchimia"
      site="https://alchimia-by-the-meeps.github.io/alchimia/"
      github="https://github.com/Alchimia-by-the-meeps/alchimia"
      image={alchimia}
      tech="Javascript / HTML / CSS / Local Storage"
      body="My very first group project, created in a one week sprint utilizing vanilla Javascript (along with HTML/CSS) and local storage to maintain state. I proposed using hashmaps and nested arrays as data structures. This allowed the app to keep track of and correctly render a series of rotate-able decorated tiles in a grid, with unique data points for each side. Using these structures in tandem we were able to validate tile placements and keep score based on the type of connections made."
      />

      <ProjectCard title="Mosaic"
      right={true}
      site="https://the-mosaic.herokuapp.com/"
      github="https://github.com/mosaic-api"
      image={mosaic}
      tech="Color API / Web Audio API / Material-UI / Jest / Supertest / Superagent / React / Node / SQL / Heroku"
      body="In this Full Stack App, I lead the team in using the Color API to create cohesive color palettes the user could choose from to create their own digital mosaic. Each colored tile is accompanied by a correlated musical note generated with Web Audio API. we utilized SQL as our persistence layer so the user can pull back saved mosaics for future modification and listen to the music generated from the mosaics they have built."
      />
    </div>
  }
}