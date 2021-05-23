import React, { useReducer, useContext, useState } from 'react'
import Geocode from 'react-geocode'
import reducer from './reducer'
import { TOGGLE_INFO } from './action'

const initialState = {
  address: '', //search bar input
  city: '',
  timeZone: '',
  zoom: 12,
  userPos: { lat: 49.16659, lng: -123.133569 }, //user original position
  height: 400, // for map height
  isInfoBoxShown: true,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [geocode, setGeoCode] = useState()

  const toggleInfoBox = () => {
    dispatch({ type: TOGGLE_INFO })
  }

  Geocode.setApiKey('AIzaSyArxmStdE9PDwy92EsIBRmEUySRfX39PUk')

  const placeGeo = async (address) => {
    let response = await Geocode.fromAddress(address)
    console.log('this is the geocode', response.results[0].geometry.location)
    return response.results[0].geometry.location
    //.then((response) => setGeoCode(response.results[0].geometry.location))
    //console.log('this is the placeGeo', geocode)
  }

  const onPlaceSelected = (place) => {
    // console.log('this is the city here ====', findCity(place.address_components))
    const address = place.formatted_address
    const userPos = placeGeo(address)
    // const city = place.address_components[0].long_name
    // const latValue = place.geometry.location.lat()
    // const lngValue = place.geometry.location.lng()

    dispatch({
      type: 'SEARCH_PLACE',
      payload: {
        address: address,
        // city: city,
        userPos: userPos,
      },
    })
  }

  return (
    <AppContext.Provider value={{ ...initialState, toggleInfoBox, onPlaceSelected, placeGeo }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
