const hotelView = (state = "grid", action) => {
  switch (action.type) {
    case 'SET_VIEW':
      if(state==="list")
        return "grid"
      else
        return "list"
    default:
      return state
  }
}

export default hotelView