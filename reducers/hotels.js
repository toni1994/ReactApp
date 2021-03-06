
const start=[]

const hotels = (state = start, action) => {
  switch (action.type) {

    case "GET_HOTELS_SUCCESS":
    return action.list;

    case "GET_ADD_HOTEL_SUCCESS":
    return action.hotel;
    

   
    case 'ADD_HOTEL':
      for(var i=0;i<state.length;i++)
        state[i].selected= "unselected"
      return [
        ...state,
        {
          id: state.length,
          name: "West in"+state.length,
          img : 'http://www.istra.hr/.app/upl_images/header_hotel5.jpg',
          category: '5 STARS',
          selected: 'selected'
        }
      ]
      
      case 'SET_HOTELS_NAME':
      for(var i=0;i<state.length;i++){
            if( action.id === state[i].id)
            { 
                state[i].name= action.text
                state[i].selected= "unselected" 
            }      
      }    
      return [...state]
        
      case 'DELETE_HOTEL':
        var remove = state.splice(action.id,1)
        for(var i=0;i<state.length;i++){
            state[i].id= i  
      }
      return [...state]      
      
      case 'SELECT_HOTEL':
       for(var i=0;i<state.length;i++){
            if( action.id === state[i].id) 
              state[i].selected= "selected"
            else
              state[i].selected= "unselected"  
      } 
      return [...state]         
    
    default:
      return state
  }
}

export default hotels
