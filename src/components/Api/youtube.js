import axios from "axios";

const KEY = "AIzaSyBwXmEAkE4K3ZuSdZLqhdu8lMtVqVlEEX0";
const Url = "https://www.googleapis.com/youtube/v3";
export default axios.create({
  baseURL: Url,
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 10,
  },
});
