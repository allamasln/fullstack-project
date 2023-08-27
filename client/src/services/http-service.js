import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const httpService = axios.create({ baseURL })

export { httpService }
