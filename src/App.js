import React, { useEffect, useRef } from 'react';
import './css/App.css';
import './css/animations.css'
import './css/media-queries.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import EntryMessgaeProvider from './hooks/EntryMessageProvider';

export default function App() {

  const scrollInto = useRef(null)
  useEffect(() => {
    scrollInto.current.scrollIntoView()
  })
  return (
    <Router >
      <EntryMessgaeProvider ref={scrollInto}>
        <Route exact path='/' component={Home} />
      </EntryMessgaeProvider>
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
    </Router>
  )
}
