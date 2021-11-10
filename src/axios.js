import axios from 'axios'

const api = axios.create({
    baseURL: 'https://admin.riuacem.com/wp-json/wp/v2/'
})

export default api