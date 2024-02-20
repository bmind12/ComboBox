import axios from 'axios'
import { API } from './config'

const axiosClient = axios.create({
  baseURL: API.BASE_URL,
})

export default axiosClient
