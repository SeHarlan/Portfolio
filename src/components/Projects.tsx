import React, { Component } from 'react'
import Nav from './Nav'

export default class Projects extends Component {
  render() {
    return (
      <section>
        <Nav />
        <h1>Highlighted Projects</h1>
        <a href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer">GitHub</a>
        <em>Sites hosted with Heroku may take a moment to wake up</em>
        <div>
          <h2>Shadespeare</h2>
          <a href="https://shadespeare-insults.herokuapp.com" target="_blank" rel="noopener noreferrer">Site</a>
          <a href="https://github.com/Shakespeare-Insult-Bot" target="_blank" rel="noopener noreferrer">Github</a>
          <h3>Markov Chain / Twilio / Regex / Jest / Supertest / React / Node / MongoDB / Mongoose / Heroku</h3>
          <p>Using the markov-chains-text library we generated Shakespeare inspired "insults" for our bot "Shadespeare". With Twilio's calling and text to voice features we are able to send in Shadespeare to speak in a Zoom call. I lead our team in creating the chatbot, where we utilized regex to capture keywords and phrases so users can interact via text with Shadespeare and receive intelligent responses. </p>
        </div>
        <div>
          <h2>Alchimia</h2>
          <a href="https://alchimia-by-the-meeps.github.io/alchimia/" target="_blank" rel="noopener noreferrer">Site</a>
          <a href="https://github.com/Alchimia-by-the-meeps/alchimia" target="_blank" rel="noopener noreferrer">Github</a>
          <h3>Javascript / HTML / CSS / Local Storage</h3>
          <p>Created in a one week sprint utilizing vanilla Javascript (along with HTML/CSS) and local storage to maintain state. I proposed using hashmaps and nested arrays as data structures. This allowed us to keep track of and correctly render a series of rotate-able decorated tiles in a grid, with unique data points for each side. Using these structures in tandem we were able to validate tile placements and keep score based on the type of connections made.</p>
        </div>
        <div>
          <h2>Mosaic</h2>
          <a href="https://the-mosaic.herokuapp.com/" target="_blank" rel="noopener noreferrer">Site</a>
          <a href="https://github.com/mosaic-api" target="_blank" rel="noopener noreferrer">Github</a>
          <h3>Color API / Web Audio API / Material UI / Jest / Supertest / Superagent / React / Node / SQL / Heroku</h3>
          <p>In this Full Stack App, I lead the team in using the Color API to create cohesive color palettes the user could choose from to create their own digital mosaic. Each colored tile is accompanied by a correlated musical note generated with Web Audio API. Utilizing SQL the user can pull back saved mosaics for future modification and listening to the music generated from the mosaics they have built.</p>
        </div>

        <h3>Wanna Hire Me?</h3>
        <a href="mailto:seharlan@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://www.linkedin.com/in/scottharlan-pnw/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer">GitHub</a>

        <h2>More Projects</h2>
        <div>
          <h3>Data Structures and Algorithms</h3>
          <a href="https://github.com/SeHarlan/data-structures-and-algorithms" target="_blank" rel="noopener noreferrer">Github</a>
          <p>A series of whiteboard challenges including Linked Lists, Binary Trees, and Stacks and Queues (see branches)</p>
        </div>
        <div>
          <h3>Unripe-Banana</h3>
          <a href="https://github.com/SeHarlan/unripe-banana" target="_blank" rel="noopener noreferrer">Github</a>
          <p>A Rotten Tomato back-end clone utilizing Express/Node, Jest, SuperTest, Mongoose, and MongoDB with aggregations and other static methods.</p>
        </div>
      </section>
    )
  }
}