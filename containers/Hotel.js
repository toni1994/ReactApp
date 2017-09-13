import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ChangeHotelsName from './ChangeHotelsName'
import { deleteHotel } from '../actions'
import { selectHotel } from '../actions'
var Cancel= require('react-icons/lib/md/cancel');

let Hotel = ({  id, name, category, img , selected, dispatch  }) => (
   <div className="col-3 hotel"   > 
            <img src={img} alt={name} onClick={e => {
            dispatch(selectHotel(id))
      }}/>
            <Cancel className="deleteButton" onClick={e => {
            dispatch(deleteHotel(id))
      }} />
            <div className="textHotel" onClick={e => {
            dispatch(selectHotel(id))
      }}>
            {category}<br/>
            <div> { selected ==="unselected" ? <b>{name} </b> : <ChangeHotelsName id={id} name={name} />   }</div>                    
            </div>
        </div>
)
Hotel = connect()(Hotel)

export default Hotel
