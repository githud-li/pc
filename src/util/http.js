import axios from 'axios'

const http = axios.create({
  baseURL: 'http://182.61.39.89:8899/',
  timeout: 10000
})

export default http
