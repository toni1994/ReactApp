import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import HotelList from '../components/HotelList'

const getHotels = (hotels, hotelsFilter,sortMode) => {
        var resultHotels = [];
        for(var i=0;i<hotels.length;i++)
        if(hotels[i].name.indexOf(hotelsFilter) !== -1) resultHotels.push(hotels[i]);

        if(sortMode==="ASC")
        {
          resultHotels.sort(function(a,b)
          {
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) 
              return -1;
              if (nameA > nameB) 
              return 1;
          });
        }
        else
        {
          resultHotels.sort(function(a,b)
          {
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) 
              return  1;
              if (nameA > nameB) 
              return -1;
          });
        }

      for(var i=0;i<resultHotels.length;i++)
      resultHotels[i].position=i;

      return resultHotels
}

const mapStateToProps = (state) => ({
  hotels: getHotels(state.hotels,state.hotelsFilter,state.hotelSort),
  view: state.hotelView,
})

const getHotel = connect(
  mapStateToProps,
)(HotelList)

export default getHotel
