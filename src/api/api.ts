import axios from 'axios';
import queryString from 'query-string';

let $axios = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

export const api = {};
