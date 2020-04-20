import axios from 'axios'

console.log('THIS IS THE NODE ENV:', process.env.NODE_ENV === 'development')
console.log('THIS IS THE NODE ENV:', process.env.NODE_ENV)
let SERVER = 'http://licenta-chestionar-back-end.herokuapp.com'
if(process.env.NODE_ENV === 'development'){
  SERVER = 'http://licenta-chestionar-back-end.herokuapp.com'
  //SERVER = 'http://localhost:2020'
}

console.log(SERVER)

export async function get(url) {
  let response = await axios(`${SERVER}/${url}`)

  return response
}

const axiosFormActionDefaults = ({ url, method, params = {} }) => ({
  method,
  url,
  data: params,
})

export async function post(url, params) {
  let response = await axios(axiosFormActionDefaults({
    url: `${SERVER}/${url}`,
    method: 'POST',
    params
  }))

  return response
}

export async function del(url) {
  let response = await axios(axiosFormActionDefaults({
    url: `${SERVER}/${url}`,
    method: 'DELETE',
  }))

  return response
}

export async function put(url, params) {
  let response = await axios(axiosFormActionDefaults({
    url: `${SERVER}/${url}`,
    method: 'PUT',
    params
  }))

  return response
}
