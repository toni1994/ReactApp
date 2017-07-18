import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ChangeHotelsName from './ChangeHotelsName'
import { deleteHotel } from '../actions'
import { selectHotel } from '../actions'
var Cancel= require('react-icons/lib/md/cancel');

let TableHotels = ({  id, name, category, img , selected, position, dispatch  }) => (
      <tbody > 
            <tr>
                  <th>{position}</th>
                  <th><img src={img} width="200x"/></th>
                  <th>{category}</th>
                  <th className="rowName" onClick={e => {
                        dispatch(selectHotel(id))
                  }}> { selected ==="unselected" ? <b>{name} </b> : <ChangeHotelsName id={id} name={name} />   }
                  </th>  
                  <th><Cancel className="deleteButton" onClick={e => {
                        e.preventDefault()
                        dispatch(deleteHotel(id))
                  }} /></th>   
            </tr>     
      </tbody>
)

TableHotels = connect()(TableHotels)

export default TableHotels
