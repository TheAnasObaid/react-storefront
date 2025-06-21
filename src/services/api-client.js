import axios from 'axios';

export default axios.create({
    baseURL: "https://dummyjson.com"
})

export const controller = new AbortController();

