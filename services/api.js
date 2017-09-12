import callApi from '../utils/call-api';

export const hotelsSources = sourcing => callApi('hotels', undefined, 'get');
export const addHotel = adding => callApi('hotels',
{ id:4 , name: "West in", img : 'http://www.istra.hr/.app/upl_images/header_hotel5.jpg',
  category: '5 STARS',  selected: 'selected'}, 
 'post');
 export const setHotelName = seting => callApi('hotels',
 { id:4 , name: "West in", img : 'http://www.istra.hr/.app/upl_images/header_hotel5.jpg',
   category: '5 STARS',  selected: 'unselected'}, 
  'put');