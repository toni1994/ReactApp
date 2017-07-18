import React from 'react';
import Header from './components/Header'
import AddHotel from './containers/AddHotel'
import GetHotel from './containers/HotelList'
import FilterHotel from './containers/HotelFilter'
import ButtonView from './containers/ButtonView'
var style = require("./css/index.scss");


class App extends React.Component {
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

export default App;