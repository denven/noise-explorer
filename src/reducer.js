import { TOGGLE_INFO } from './action'

const reducer = (state, action) => {
  if (action.type === TOGGLE_INFO) {
    return { ...state, isInfoBoxShown: !state.isInfoBoxShown }
  }

  if (action.type === 'SEARCH_PLACE') {
    const { address, city, latValue, lngValue } = action.payload
    return {
      ...state,
      address: address,
      city: city,
      userPos: { lat: latValue, lng: lngValue },
    }
  }

  return { ...state }
}

export default reducer
