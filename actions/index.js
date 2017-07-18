export const addHotel = () => ({
  type: 'ADD_HOTEL',
})

export const setHotelsFilter = (filter) => ({
  type: 'SET_HOTELS_FILTER',
  filter
})

export const setHotelsName = (text,id) => ({
  type: 'SET_HOTELS_NAME',
  id,
  text
})

export const deleteHotel = (id) => ({
  type: 'DELETE_HOTEL',
  id
})

export const selectHotel = (id) => ({
  type: 'SELECT_HOTEL',
  id
})

export const changeView = () => ({
  type: 'SET_VIEW',
})

export const sort = (text) => ({
  type: 'SET_SORT',
  text
})



