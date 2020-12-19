import axios from 'axios'
export const Unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7fyk8FHb78UB5XoLl8JggQ5FGxx611H0WL6auMAvUYE',
  },
})
