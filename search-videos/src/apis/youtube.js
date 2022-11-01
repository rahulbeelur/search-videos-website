import axios from 'axios';

const KEY = "AIzaSyB2mH8iJDhdCBnA0nNAq9nEF4nBF_390m8";


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
