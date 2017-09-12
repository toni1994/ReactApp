import { camelizeKeys, decamelizeKeys } from 'hump';
// import fetch from 'isomorphic-fetch';
import qs from 'qs';

const API_URL = 'http://localhost:3000';

export default function callApi(endpoint, body, method) {
  const headers = new Headers();
  if(body){ 
    headers.set("Content-Type","application/json")}
 
  let bodyData = body;
  let queryParams = '';
  console.log(body)
  const URL = `${API_URL}/${endpoint}${queryParams}`;

  return fetch(URL, {
    headers,
    method: method || (body ? 'post' : 'get'),
    mode: 'cors',
    body: bodyData,
  }).then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      return json;
    });

}