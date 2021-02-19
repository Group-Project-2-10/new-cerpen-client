import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cerpen-diy.herokuapp.com/'
})

export default instance
