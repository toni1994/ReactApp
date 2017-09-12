import React from 'react'
import { connect } from 'react-redux'
import {setHotelsName} from '../actions'
import { watchSetHotelName } from '../sagas'

let ChangeHotelsName = ({ id,name,dispatch }) => {
  let input

  return (
    <div>
      
      <form id="changeName" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(setHotelsName(input.value,id))
        input.value = ''
      }}>
      <input ref={node => {
          input = node
        }} type="text" placeholder={name}/>
      <button id="changeNameButton" type="submit">
         Save Name
      </button>
      </form>
      
    </div>
  )
}
ChangeHotelsName = connect()(ChangeHotelsName)

export default ChangeHotelsName