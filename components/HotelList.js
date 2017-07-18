import React from 'react'
import PropTypes from 'prop-types'
import Hotel from '../containers/Hotel'
import TableView from '../containers/TableView'
import Arrow from '../containers/Arrow'
var ArrowUp= require('react-icons/lib/fa/arrow-up');
var ArrowDown= require('react-icons/lib/fa/arrow-down');

const HotelList = ({ hotels,view }) => (
   <div> { view==="grid" ? <ul>
    {hotels.map(hotel =>
      <Hotel
        key={hotel.id}
        {...hotel}
      />
    )}
                          </ul> : 
  <table className="tableView">
    <thead className="tableHead">
        <tr>
            <th>ID</th>
            <th>Picture</th> 
            <th>Category</th>
            <th>Name
                <Arrow />
             
            </th>
            <th>Delete</th>
        </tr>
    </thead>
            {hotels.map(hotel =>
            <TableView
              key={hotel.id}
              {...hotel}
            />
          )}
  </table> 
  } 
  </div>
)

export default HotelList
