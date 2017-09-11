import callApi from '../utils/call-api';

export const HotelsSources = cat => callApi('hotels', undefined, 'get');
export const addHotel = ap => callApi('hotels',
{ id:4 , name: "West in", img : 'http://www.istra.hr/.app/upl_images/header_hotel5.jpg',
  category: '5 STARS',  selected: 'selected'}, 
 'post');