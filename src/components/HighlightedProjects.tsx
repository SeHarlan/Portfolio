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
      body={`Using the markov-chains-text library we generated Shakespeare inspired "insults" for our bot "Shadespeare". With Twilio's calling and text to voice features we are able to send in Shadespeare to speak in a Zoom call. I lead our team in creating the chatbot, where we utilized regex to capture keywords and phrases so users can interact via text with Shadespeare and receive intelligent responses.`} />
      <div className="project-div">
        <section>
          <div>
            <h3>Shadespeare</h3>
            <a href="https://shadespeare-insults.herokuapp.com" target="_blank" rel="noopener noreferrer">Site</a>
            <a href="https://github.com/Shakespeare-Insult-Bot" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <img src="/images/shadespeare.png" alt="shadespeare" />
        </section>
        <article>
          <h4>Markov Chain / Twilio / Regex / Jest / Supertest / React / Node / MongoDB / Mongoose / Heroku</h4>
          <p>Using the markov-chains-text library we generated Shakespeare inspired "insults" for our bot "Shadespeare". With Twilio's calling and text to voice features we are able to send in Shadespeare to speak in a Zoom call. I lead our team in creating the chatbot, where we utilized regex to capture keywords and phrases so users can interact via text with Shadespeare and receive intelligent responses. </p>

        </article>
      </div>

      <div className="project-div-right">
        <article>
          <h4>Javascript / HTML / CSS / Local Storage</h4>
          <p>Created in a one week sprint utilizing vanilla Javascript (along with HTML/CSS) and local storage to maintain state. I proposed using hashmaps and nested arrays as data structures. This allowed us to keep track of and correctly render a series of rotate-able decorated tiles in a grid, with unique data points for each side. Using these structures in tandem we were able to validate tile placements and keep score based on the type of connections made.</p>
        </article>
        <section>
          <div>
            <h3>Alchimia</h3>
            <a href="https://alchimia-by-the-meeps.github.io/alchimia/" target="_blank" rel="noopener noreferrer">Site</a>
            <a href="https://github.com/Alchimia-by-the-meeps/alchimia" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <img src="/images/alchimia.png" alt="alchimia" />
        </section>
      </div>

      <div className="project-div">
        <section>
          <div>
            <h3>Mosaic</h3>
            <a href="https://the-mosaic.herokuapp.com/" target="_blank" rel="noopener noreferrer">Site</a>
            <a href="https://github.com/mosaic-api" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <img src="/images/mosaic.png" alt="mosaic" />
        </section>
        <article>
          <h4>Color API / Web Audio API / Material UI / Jest / Supertest / Superagent / React / Node / SQL / Heroku</h4>
          <p>In this Full Stack App, I lead the team in using the Color API to create cohesive color palettes the user could choose from to create their own digital mosaic. Each colored tile is accompanied by a correlated musical note generated with Web Audio API. Utilizing SQL the user can pull back saved mosaics for future modification and listening to the music generated from the mosaics they have built.</p>
        </article>
      </div>
    </div>
  }
}