import axios from 'axios';

const apiKey = import.meta.env.VITE_YELP_API_TOKEN
const apiurl = import.meta.env.VITE_YELP_API_URL




const yelpApi = axios.create({
  baseURL: `${'https://cors-anywhere.herokuapp.com/'}${'https://api.yelp.com'}`, // Ganti dengan URL API yang sesuai
  headers: {
    'Authorization': `Bearer UMJ-jTpabefy4TjFStJoCVLvLW2DW9w9v_HNMfnj0zDYK1aOKUvYoxZzooTRsG5EpPExQ1JrI48DJU_PHaLMYGzOakCljxRPxATlGH0DDWrTMRfD4d_CiHNVDvGHZHYx`,
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    // 'Origin': 'http://localhost:5173',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': 'http://localhost:5173',
  },
});

export default yelpApi;
