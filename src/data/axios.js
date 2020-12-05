import axios from 'axios'

const instance = axios.create({
    baseURL: "https://backend-uniquegifts.herokuapp.com"
})

export default instance