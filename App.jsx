import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './components/Header'
import AddHotel from './containers/AddHotel'
import GetHotel from './containers/HotelList'
import FilterHotel from './containers/HotelFilter'
import ButtonView from './containers/ButtonView'
var style = require("./css/index.scss");
import {getHotels} from "./actions";


class App extends React.Component {
  componentWillMount(){
    this.props.actions.getHotels();
  }
   render() {
     
      return (
         <div>
           <div className="leftDiv"> 
                     </div>
            <div className="rightDiv">
                     <Header />
                     <FilterHotel /> 
                     <ButtonView />
                     <GetHotel />   
                     <AddHotel />                                            
            </div>    
         </div>
      );
   }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getHotels,
    }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(App);