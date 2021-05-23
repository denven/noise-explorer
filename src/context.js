import React, { useReducer, useContext } from 'react'

const initialState = {
  address: '', //search bar input
  city: '',
  timeZone: '',
  zoom: 12,
  userPos: { lat: 0, lng: 0 }, //user original position
  height: 400, // for map height
  isInfoBoxShown: false,
}

const toggleInfoBox = () => {
  return { ...initialState, isInfoBoxShown: !initialState.isInfoBoxShown }
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ ...initialState, toggleInfoBox }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
