import React, {useState, useEffect}from 'react';
import Typist from 'react-typist';

//Thank you react-typist for the typing animation!

const EntryMessage = ({greeting}: {greeting: string}) => {
  const [display, setDisplay] = useState('flex')
  const [opacity, setOpacity] = useState(1)
  useEffect(() => {
    setTimeout(() => setOpacity(0), 8000)
    setTimeout(() => setDisplay('none'), 11000)
  }, [])
  return (
    <section className="entry-container" style={{opacity: opacity, display: display}}>
      <Typist >
        <div >
        <p>{greeting} and welcome to the personal portfolio of Scott Harlan. We hope you enjoy your visit!</p>
        </div>
      </Typist>
      <img className="entry-image" src="/images/vapor-palm.png" alt="palm tree"/>
    </section>
  )
};



export default EntryMessage;