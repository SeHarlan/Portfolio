import React, { createContext, useState, useContext } from 'react';

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