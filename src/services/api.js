import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jb-omnistack-backend.herokuapp.com'
})

export default api