import React, {useState, useEffect}from 'react';
import Typist from 'react-typist';
import { useGlobal } from '../hooks/EntryMessageProvider';

//Thank you react-typist for the typing animation!

const EntryMessage = ({greeting}) => {
  const [display, setDisplay] = useState('flex')
  const [opacity, setOpacity] = useState(1)
  const {entryBool, setEntryBool} = useGlobal()

  useEffect(() => {
    setTimeout(() => setOpacity(0), 10000)
    setTimeout(() => setDisplay('none'), 13000)
    setTimeout(() => setEntryBool(false), 15000)
  }, [setEntryBool])
  const handleClick = () => {
    console.log('clicke')
    setEntryBool(false)
  }
  
  if(!entryBool) return <></>
  return (
    <section className="entry-container" style={{opacity: opacity, display: display}}>
      <Typist >
        <div >
        <p id="entry-text">{greeting} and welcome to the personal portfolio of Scott Harlan. We hope you enjoy your visit!</p>
        </div>
      </Typist>
      <img className="entry-image" src="/images/vapor-palm.png" alt="palm tree"/>
      <button className="entry-button" onClick={handleClick}>X</button>
    </section>
  )
};



export default EntryMessage;