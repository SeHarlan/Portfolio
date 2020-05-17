import React, { useEffect } from 'react';
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

  useEffect(() => {
    /mobile/i.test(navigator.userAgent) && setTimeout(() => {
          window.scrollTo(0, 48)
        }, 1000)
  }, [])
  return (
    <Router>
      <EntryMessgaeProvider>
        <Route exact path='/' component={Home} />
      </EntryMessgaeProvider>
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
    </Router>
  )
}
