import React, { Component } from 'react'
import Nav from './Nav'
import Waves from './Waves'

export default class Home extends Component {
  state = {
    greeting: 'Hello, '
  }
  componentDidMount() {
    let time = new Date().getHours()
    time += 0
    let greeting = 'Hello, '
    if (time > 4) greeting = 'Good Morning ';
    if (time > 11) greeting = 'Good Afternoon, ';
    if (time > 16) greeting = 'Good Evening, ';
    this.setState({ greeting: greeting })
  }
  getTitleImg() {
    const { greeting } = this.state
    if (greeting === 'Hello, ') return "/images/scott-saturn.png";
    if (greeting === 'Good Evening, ') return "/images/scott-moon.png";
    return "/images/Scott-Harlan.png"
  }
  render() {
    return (
      <section>
        <header className="home-header">
          <Nav />
          <Waves />
          <img className="scott-harlan" src={this.getTitleImg()} alt="Scott Harlan" />
          <p>"A Full Stack Software Engineer who thrives on building relationships with diverse teams and tackling complex challenges."</p>
          <img className="grid" src="/images/grid.png" alt="grid" />
        </header>
        <section>
          <img className="water-bg" src="/images/water-bg.jpg" alt="water background" />
          <div className="home-about">
            <img src="/images/vapor-bust.png" alt="statue" />
            <p>Scott's background in customer service gives him a unique focus on a client's perspective and overall satisfaction. He highly values companies that support direct communication, creativity and professional development.</p>
            <p>As a musician and critical thinker, nothing excites him more than discovering unique ideas that solve root problems and uplift others.</p>
            <p>In his personal life Scott loves expressing himself through music. This includes playing in bands like Seance Crasher and producing his own songs and compositions.</p>
            <h2>link to resume</h2>
          </div>

          <div className="home-projects">
            {/* <img className="projects-bg" src="/images/water-bg.jpg" alt="water background" /> */}
            <header>
              <h1>Highlighted Projects</h1>
              <img src="/images/gameboy.gif" alt="gameboy" />
            </header>
            <h5>~ Sites hosted with Heroku may take a moment to wake up ~</h5>

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

          <div className="home-contact">
            <header>
              <h1>Wanna Hire Me?</h1>
              <img src="/images/ok-hand.gif" alt="ok-hand" />
            </header>
            <a href="mailto:seharlan@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://www.linkedin.com/in/scottharlan-pnw/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/SeHarlan" target="_blank" rel="noopener noreferrer">GitHub</a>

          </div>

        </section>
      </section>
    )
  }
}