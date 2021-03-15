import axios from 'axios'

const instance = axios.create ({
    baseURL: "https://tinder-backend-us.herokuapp.com"
})

export default instance;