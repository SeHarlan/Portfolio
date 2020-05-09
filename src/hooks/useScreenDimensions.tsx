import {useEffect, useState} from 'react'

function getScreenDimensions() {
  const {innerWidth: width, innerHeight: height} = window
  return {width, height}
}

export const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState(getScreenDimensions())

  useEffect(() => {
    const handleResize = () => setScreenDimensions(getScreenDimensions());
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenDimensions;
}