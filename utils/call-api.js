import { camelizeKeys, decamelizeKeys } from 'humps';
// import fetch from 'isomorphic-fetch';
import qs from 'qs';

const KEY = 'aee9661b86bf453b87fef9bec68f41e8';
const API_URL = 'http://localhost:3000';

export default function callApi(endpoint, body, method, queryData, articles = false) {

  const headers = new Headers();
  let bodyData = body;
  let queryParams = '';

  if (queryData) {
    queryParams = `?${qs.stringify({ ...queryData, apiKey: KEY }, { encode: false, indices: false })}`;
  }


  const URL = `${API_URL}/${endpoint}${queryParams}`;

  return fetch(URL, {
    headers,
    method: method || (body ? 'post' : 'get'),
    mode: 'cors',
    body: bodyData,
  }).then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      const camelizedJson = camelizeKeys(json);

      if (!response.ok && !articles) {
        return Promise.reject(camelizedJson);
      }

      return camelizedJson;
    });
}