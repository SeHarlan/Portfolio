import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import goingViral from '../assets/going-viral.png'
import shadespeare from '../assets/shadespeare.png'
import hac from '../assets/hac.png'



export default class HighlightedProjects extends Component {
  render() {
    return <div className="highlighted-projects">
      <header>
        <h1>Projects</h1>
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
      <ProjectCard title="Hards Against Humanity"
        right={true}
        site="https://hards-against-cumanity.herokuapp.com/"
        github="https://github.com/SeHarlan/hards-against-cumanity"
        image={hac}
        tech="Next / socket.io / React / Node / Heroku"
        body={`For this solo project I learned socket.io and the Next.js framework. Using these technologies, along with my experience In React and Node I created an online version of the card game Cards Against Humanity. Socket.io allows for bi-directional communication between web clients and servers. This makes for a seamless interaction between players. In addition to dynamic pages and routing, Next.js allowed me to pre-render the application server-side for faster performance and better SEO.`}
      />

      <ProjectCard title="Shadespeare"
        site="https://shadespeare-insults.herokuapp.com"
        github="https://github.com/Shakespeare-Insult-Bot"
        image={shadespeare}
        tech="Markov Chain / Twilio / Regex / Jest / Supertest / React / Node / MongoDB / Mongoose / Heroku"
        body={`Using the markov-chains-text library, Shakespeare inspired insults were generated for the "Shadespeare" bot. With Twilio's calling and text to voice features you are able to send in Shadespeare to speak in a Zoom call. I lead the team in creating the chatbot, where we utilized regex to capture keywords and phrases so users can interact via text with Shadespeare and receive intelligent responses.`}
      />




    </div>
  }
}