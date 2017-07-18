import React from 'react'
import { connect } from 'react-redux'
import { changeView } from '../actions'


let ButtonView = ({ dispatch }) => {
  let input

  return (
    <div>
        <button className="changeModButton" type="submit" onClick={e => {
        e.preventDefault()
        dispatch(changeView())
      }} >
          Change View
        </button>
    </div>
  )
}
ButtonView = connect()(ButtonView)

export default ButtonView
