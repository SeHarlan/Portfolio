import React, { createContext, useState, useContext } from 'react';

// Global state to keep track of the intro/ entry message so that it is only viewed once

const MessageContext = createContext({})

const EntryMessgaeProvider = ({children}) => {
  const [entryBool, setEntryBool]= useState(true)

  return (
    <MessageContext.Provider value={{entryBool, setEntryBool}} >
      {children}
    </MessageContext.Provider>
  )
}


export default EntryMessgaeProvider;

export const useGlobal = () => {
  const state = useContext(MessageContext)
  return state
}