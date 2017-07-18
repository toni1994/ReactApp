import React from 'react'
import { connect } from 'react-redux'
import { setHotelsFilter } from '../actions'

let FilterHotel = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onChange={e => {
        dispatch(setHotelsFilter(input.value))
      }} >
        <input ref={node => {
          input = node
        }} type="text" placeholder="Search Hotel..."/>
      </form>
    </div>
  )
}
FilterHotel = connect()(FilterHotel)

export default FilterHotel