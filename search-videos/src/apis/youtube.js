import axios from 'axios';

const KEY = "AIzaSyBoyWgfGtNK6km76yJmrL8kO2Onz_7Xf7U";


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});
