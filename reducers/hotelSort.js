const hotelSort = (state = "ASC", action) => {
  switch (action.type) {
    case 'SET_SORT':
      if(action.text==="ASC")
        return "ASC"
      else
        return "DESC"
    default:
      return state
  }
}

export default hotelSort