import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sort } from '../actions'
var ArrowUp= require('react-icons/lib/fa/arrow-up');
var ArrowDown= require('react-icons/lib/fa/arrow-down');


let Arrow = ({  dispatch  }) => (
    <div>
       <ArrowUp className="arrows" onClick={e => {
        e.preventDefault()
        dispatch(sort("ASC"))
      }}/> 
       <ArrowDown className="arrows" onClick={e => {
        e.preventDefault()
        dispatch(sort("DESC"))
      }}/>
    </div>
)

Arrow = connect()(Arrow)
export default Arrow