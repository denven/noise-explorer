import React, { useReducer, useContext } from 'react'
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

  const toggleInfoBox = () => {
    dispatch({ type: TOGGLE_INFO })
  }

  const findCity = (addresses) => {
    let city = ''
    for (let i = 0; i < addresses.length; i++) {
      if (addresses[i].types[0] && 'addministrative_area_level_2' === addresses[i].types[0]) {
        city = addresses[i].long_name
      }
    }
    return city
  }

  const onPlaceSelected = (place) => {
    console.log('this is the city here ====', findCity(place.address_components))
    const address = place.formatted_address
    const city = place.address_components[0].long_name
    const latValue = place.geometry.location.lat()
    const lngValue = place.geometry.location.lng()

    dispatch({
      type: 'SEARCH_PLACE',
      payload: {
        address: address,
        city: city,
        latValue: latValue,
        lngValue: lngValue,
      },
    })
  }

  return (
    <AppContext.Provider value={{ ...initialState, toggleInfoBox, onPlaceSelected, findCity }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
