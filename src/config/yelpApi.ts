import axios from 'axios';

const apiKey = import.meta.env.VITE_YELP_API_TOKEN
const apiurl = import.meta.env.VITE_YELP_API_URL




const yelpApi = axios.create({
  baseURL: `${'https://cors-anywhere.herokuapp.com/'}${apiurl}`, // Ganti dengan URL API yang sesuai
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    // 'Origin': 'http://localhost:5173',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': 'http://localhost:5173',
  },
});

export default yelpApi;
