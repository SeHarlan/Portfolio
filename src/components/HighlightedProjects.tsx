import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import goingViral from '../assets/going-viral.png'
import shadespeare from '../assets/shadespeare.png'
import hac from '../assets/hac.png'



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
        body={`I learned D3 in a ten day remote team sprint to visualize Google’s COVID Mobility Reports and Bing's Case Statistics.
        Munged the mobility data with GeoJSON and fed that to an interactive D3 globe I made. This functional map component integrates with React via custom hooks and a useEffect based update pattern.  
        I also designed the global state with Redux to asynchronously retrieve our data from our API then feed that to our graphs and charts across the app. 
        I helped design and implement the user interface using Material-UI.`}
      />
      <ProjectCard title="HAC"
        right={true}
        site="https://hards-against-cumanity.herokuapp.com/"
        github="https://github.com/SeHarlan/hards-against-cumanity"
        image={hac}
        tech="Next / socket.io / React / Node / Heroku"
        body={`I learned Socket.io to create an online version of Cards Against Humanity.
        With this knowledge I made an API that could automatically create unique Socket.io "rooms" that are synced with a corresponding game-state.
        I used classes in Node to manage simultaneous game-states on one server. 
        Utilized Next.js to dynamically create sharable, user named page URLs.
        Integrated Socket.io event listeners with a custom hook to manage client-side game state within React.`}
      />

      <ProjectCard title="Shadespeare"
        site="https://shadespeare-insults.herokuapp.com"
        github="https://github.com/Shakespeare-Insult-Bot"
        image={shadespeare}
        tech="Markov Chain / Twilio / Regex / Jest / Supertest / React / Node / MongoDB / Mongoose / Heroku"
        body={`I used Markov chains to create a semi-intelligent Shakespeare chat bot.
        I extracted key words from user text input with regex capture groups and used them to help format a uniquely generated and intelligent response.`}
      />




    </div>
  }
}