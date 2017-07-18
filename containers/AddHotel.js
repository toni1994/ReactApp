import React from 'react'
import { connect } from 'react-redux'
import { addHotel } from '../actions'


let AddHotel = ({ dispatch }) => {
  let input

  return (
    <div>
        <button className="addButton" type="submit" onClick={e => {
        e.preventDefault()
        dispatch(addHotel())
        }} >
          Add Hotel
        </button>
    </div>
  )
}
AddHotel = connect()(AddHotel)

export default AddHotel
