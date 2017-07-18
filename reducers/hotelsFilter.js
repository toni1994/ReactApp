const hotelsFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_HOTELS_FILTER':
      return action.filter
    default:
      return state
  }
}

export default hotelsFilter
