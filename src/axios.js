import axios from 'axios'

const api = axios.create({
    baseURL: 'http://35.246.84.198/~acemedun/wp-json/wp/v2/'
})

export default api